import { Component, OnInit } from '@angular/core';
import { NotificationSocketService } from '../../services/NotificationSocketService';
import { Post, Comment, User, Channel, Like } from '../../models/models';
declare var Notification: any;

@Component({
    selector: 'user-list',
    templateUrl: 'user-list.html'
})
export class UserListComponent implements OnInit {
    notifs: string[] = [];

    constructor(private notificationSocketService: NotificationSocketService) {
        notificationSocketService.onNewActivity((activity) => {
            const notif = this.format(activity);
            this.notify(notif);
            this.notifs.push(notif);
            localStorage.setItem('activities', JSON.stringify(this.notifs));
        });
    }

    format(activity) {
        if (!activity) return 'NOACTIVITY!';
        if (activity.hasOwnProperty('post') && activity.hasOwnProperty('creationTime') && !activity.hasOwnProperty('liked')) {
            let like = <Like>activity;
            return `New like by ${like.user.username}`;
        }
        else if (activity.hasOwnProperty('post')) {
            let comment = <Comment>activity;
            return `New comment by ${comment.user.username} on post by ${comment.post.user.username}`;
        }
        else if (activity.hasOwnProperty('user')) {
            let post = <Post>activity;
            return `New post by ${post.user.username} on channel ${post.channel.name}`;
        }
        else if (activity.hasOwnProperty('username')) {
            let user = <User>activity;
            return `New user ${user.username}`;
        }
        else if (activity.hasOwnProperty('name')) {
            let channel = <Channel>activity;
            return `New channel ${channel.name}`;
        }
        else {
            return JSON.stringify(activity);
        }
    }



    ngOnInit() { }

    notify(message) {
        let notification;
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }
        else if (Notification.permission === "granted") {
            notification = new Notification(message);
        }
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
                if (permission === "granted") {
                    notification = new Notification(message);
                }
            });
        }
    }
}
