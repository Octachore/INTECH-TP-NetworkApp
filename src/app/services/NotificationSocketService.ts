import { Injectable } from '@angular/core';
import { PostSocketService } from './PostSocketService';
import { SocketService } from './SocketService';

@Injectable()
export class NotificationSocketService {
  constructor(
    private socket: SocketService,
    private postSocketService: PostSocketService
  ) {
  }

  onNewActivity(callback: (activity: any) => void) {
    this.postSocketService.onComment(callback);
    this.postSocketService.onLike(callback);
    this.postSocketService.onNewChannel(callback);
    this.postSocketService.onPost(callback);
    this.postSocketService.onUserConnect(callback);
  }
}