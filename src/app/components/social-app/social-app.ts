import { Component, OnInit, EventEmitter } from '@angular/core';
import { Channel } from 'models';
import { ChannelService, PostSocketService } from 'services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'social-app',
    templateUrl: 'social-app.html'
})
export class SocialAppComponent implements OnInit {
    channels: Channel[] = [];

    constructor(
        private channelService: ChannelService,
        private route: ActivatedRoute,
        private postSocket: PostSocketService,
        private router: Router
    ) {
        postSocket.onNewChannel(() => this.refresh())
    }

    async ngOnInit() {
        await this.refresh();
        if (this.router.isActive('/channel', true) && Array.isArray(this.channels) && this.channels.length > 0) {
            this.router.navigateByUrl('/channel/' + this.channels[0].id);
        }
    }

    async refresh() {
        this.channels = await this.channelService.getAll();
    }
}
