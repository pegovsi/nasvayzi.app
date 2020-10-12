import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {ActivatedChatGroup} from '../Models/Notifications/activatedChatGroup';
import {ChatGroup} from '../Models/chats/chatGroup';

@Injectable({
  providedIn: 'root'
})
export class ActivatedChatGroupServiceService {
  public $alert = new Subject<ChatGroup>();
  constructor() { }

  // tslint:disable-next-line:typedef
  public Activate(group: ChatGroup){
    this.$alert.next(group);
  }
}
