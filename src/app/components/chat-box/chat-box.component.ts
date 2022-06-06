import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CONSTANTS } from '../../shared/helper/constants';

@Component({
  selector: 'chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {

  lastChatMsg: any;
  values: any;

  @Input() chatMessages: any;
  @Input() textInputRef: any;

  @Output() submitText = new EventEmitter();
  @Output() sendToServerText = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.values = CONSTANTS;
    this.lastChatMsg = (this.chatMessages && this.chatMessages.length && this.chatMessages[this.chatMessages.length - 1]) || null;
  }

  submitTextarea() {
    this.submitText.emit(true);
  }

  sendServerMsg() {
    this.sendToServerText.emit(true);
  }

  getImages(imgFileName) {
    return '/assets/images/' + imgFileName;
  }

}
