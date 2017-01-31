import { Component, Input } from '@angular/core';
import { Channel } from 'models';
import { NotificationSocketService } from '../../services/NotificationSocketService';

@Component({
    selector: 'menu',
    templateUrl: 'menu.html'
})
export class MenuComponent {
    @Input() channels: Channel[] = [];
    counter: number = 0;

    constructor(private notificationSocketService: NotificationSocketService) {
        notificationSocketService.onNewActivity(() => this.counter += 1);
    }
}