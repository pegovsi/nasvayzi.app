import { Component, OnInit } from '@angular/core';
import {Chat} from '../Models/chats/chat';
import {ActivatedChatGroupServiceService} from '../Services/activated-chat-group-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chats-block',
  templateUrl: './chats-block.component.html',
  styleUrls: ['./chats-block.component.scss']
})
export class ChatsBlockComponent implements OnInit {

  chats: Chat[] = [];
  aSub: Subscription;
  constructor(private activatedChatGroupService: ActivatedChatGroupServiceService) { }

  ngOnInit(): void {
    this.aSub = this.activatedChatGroupService.$alert.subscribe(alert => {
      if (alert.id === 1){
        this.chats = this.chats.filter(x => x.id === 1 || x.id === 2 || x.id === 3);
      }
      if (alert.id === 2){
        this.chats = this.chats.filter(x => x.id === 2);
      }
      if (alert.id === 3){
        this.chats = this.chats.filter(x => x.id === 3);
      }
    });
    const chat1: Chat = {
      id: 1,
      name: 'Ирина',
      image: 'assets/chat-1.png',
      message: 'Правда, все сравнивают новинку с играми пре...',
      date: '16:45'
    };
    const chat2: Chat = {
      id: 2,
      name: 'Женя',
      image: 'assets/Ellipse 15.png',
      message: 'Добрый день, уточняю по вашему запросу, пожал ...',
      date: '14:45'
    };
    const chat3: Chat = {
      id: 3,
      name: 'Мария',
      image: 'assets/Ellipse 18.png',
      message: 'Привет',
      date: '19:45'
    };
    this.chats.push(chat1);
    this.chats.push(chat2);
    this.chats.push(chat3);
  }

}
