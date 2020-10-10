import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatGroup} from '../../Models/chats/chatGroup';
import {ActivatedChatGroupServiceService} from '../../activated-chat-group-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-aside-group',
  templateUrl: './aside-group.component.html',
  styleUrls: ['./aside-group.component.scss']
})
export class AsideGroupComponent implements OnInit, OnDestroy {
  chatGoups: ChatGroup[] = [];
  aSub: Subscription;
  constructor(private activatedChatGroupService: ActivatedChatGroupServiceService) { }
  ngOnInit(): void {
    const group1: ChatGroup = {name: 'Все чаты', id: 1 };
    const group2: ChatGroup = {name: 'Моя команда', id: 2 };
    const group3: ChatGroup = {name: 'Каналы', id: 3 };
    const group4: ChatGroup = {name: 'Поставщики', id: 4 };
    const group5: ChatGroup = {name: 'Боты', id: 5 };
    this.chatGoups.push(group1);
    this.chatGoups.push(group2);
    this.chatGoups.push(group3);
    this.chatGoups.push(group4);
    this.chatGoups.push(group5);


  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  // tslint:disable-next-line:typedef
  public activateGroup(group: ChatGroup){
    this.activatedChatGroupService.$alert.next(group);
  }

  public active(id: number): void {
    console.log(id);
    const group = this.chatGoups.find(x => x.id === id);
    this.activateGroup(group);
  }
}
