import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ChatService, Message } from './chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators'
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit, AfterViewInit {
  messages: Observable<Message[]>;
  textValue: string;
  disableScrollDown = false
  constructor(private chat: ChatService) { }
  @ViewChildren('messages') messagesData: QueryList<any>;
  @ViewChild('content', null) content: ElementRef;
  ngOnInit() {
    this.messages = this.chat.conversation.asObservable().pipe(scan((acc, val) => acc.concat(val)))
    console.log(this.messages)
  }

  sendMessage() {
    this.chat.converse(this.textValue);
    this.textValue = '';
  }

  ngAfterViewInit() {
    this.messagesData.changes.subscribe(this.scrollToBottom);
  }

  scrollToBottom = () => {
    try {
      this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
    } catch (err) { }
  }


}
