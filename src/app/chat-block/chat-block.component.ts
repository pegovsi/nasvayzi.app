import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-block',
  templateUrl: './chat-block.component.html',
  styleUrls: ['./chat-block.component.scss']
})

export class ChatBlockComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() image: string;
  @Input() message: string;
  @Input() date: string;
  constructor() { }

  ngOnInit(): void {
  }

}
