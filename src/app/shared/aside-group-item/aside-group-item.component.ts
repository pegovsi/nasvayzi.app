import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedChatGroupServiceService} from '../../Services/activated-chat-group-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-aside-group-item',
  templateUrl: './aside-group-item.component.html',
  styleUrls: ['./aside-group-item.component.scss']
})
export class AsideGroupItemComponent implements OnInit, OnDestroy {

  @Input() name: string;
  @Input() id: number;
  @Input() isActive: boolean;
  aSub: Subscription;
  constructor(private activatedChatGroupService: ActivatedChatGroupServiceService) {
  }
  ngOnInit(): void {
    this.aSub = this.activatedChatGroupService.$alert.subscribe(alert => {
      console.log('alert!!!');
      if (alert.id === this.id){
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    });
  }
  ngOnDestroy(): void {
    if (this.aSub){
      this.aSub.unsubscribe();
    }
  }


}
