import { Component, OnInit, EventEmitter } from '@angular/core';
import { Channel } from 'models';
import { ChannelService, PostSocketService } from 'services';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'social-app',
    templateUrl: 'social-app.html'
})
export class SocialAppComponent implements OnInit {
    channels: Channel[] = [];

    constructor(
        private channelService: ChannelService,
        private route: ActivatedRoute,
        private postSocket: PostSocketService
    ) {
        postSocket.onNewChannel(() => this.refresh())
    }

    async ngOnInit() {
        this.refresh();
    }

    async refresh() {
        this.channels = await this.channelService.getAll();
    }
}
