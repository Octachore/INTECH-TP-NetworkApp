import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PostService, MessageParser } from '../../services/index';
import { Post, Comment } from '../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user-inputs',
    templateUrl: 'user-inputs.html'
})
export class UserInputsComponent {

    @Input() channelId: string;
    @Input() post: Post;
    message:string;


    constructor(
        private postervice: PostService
    ) {
    }

    send() {
        if(this.post) this.postervice.comment(this.post, this.message);
        else if(this.channelId) this.postervice.post(this.channelId, this.message);
        console.log('post', this.post);
        console.log('message', this.message);
        this.message = '';
    }
}
