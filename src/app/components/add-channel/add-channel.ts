import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalDirective } from 'ng2-bootstrap';
import { ChannelService } from 'services';

@Component({
    selector: 'add-channel',
    templateUrl: 'add-channel.html'
})
export class AddChannelComponent {
    @ViewChild(ModalDirective)
    modal: ModalDirective;
    @ViewChild(NgForm)
    ngForm: NgForm;

    model = { name: '' };

    message: string;

    constructor(private channelService: ChannelService) {
    }

    close() {
        this.message = '';
        this.modal.hide();
    }

    save() {
        const name = this.model.name;
        if (this.ngForm.valid) {
            this.channelService.getAll().then((channels) => {
                if (channels.map(c => c.name).indexOf(name) > -1) {
                    this.message = 'Name already exists';
                    return;
                }
                else {
                    this.channelService.add(this.model.name);
                    this.modal.hide();
                }
            });
        }
    }
}