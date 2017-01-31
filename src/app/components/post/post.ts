import { Component, Input } from '@angular/core';
import { Post } from 'models';
import { PostService, PostSocketService, LoggedUser, MessageParser } from 'services';

@Component({
    selector: 'post',
    templateUrl: 'post.html'
})
export class PostComponent {
    @Input() post: Post;
    @Input() isComment: boolean = false;
    showComments: boolean = false;

    constructor(
        private postSocket: PostSocketService,
        private user: LoggedUser,
        private postService: PostService,
        private parser: MessageParser,
    ) {
        postSocket.onComment((comment) => {
            if(!Array.isArray(this.post.comments)) this.post.comments = [];
            this.post.comments.push(comment);
        });
    }

    ngOnInit() {
        this.post.content = this.parser.parse(this.post);
    }

    like() {
        this.post.liked = !this.post.liked;
        this.postService.like(this.post);
    }
}
