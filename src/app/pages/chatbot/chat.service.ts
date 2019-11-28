import { Injectable, ElementRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { BehaviorSubject } from 'rxjs';

export class Message {
  constructor(public content: string, public sentBy: string, public sendTime: Date) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.chatbot;
  readonly client = new ApiAiClient({
    accessToken: this.token
  })

  conversation = new BehaviorSubject<Message[]>([]);
  constructor() { }

  talk() {
    this.client.textRequest('Who are you!').then(res => {
      console.log(res);
    })
  }

  update(msg: Message) {
    this.conversation.next([msg]);
  }

  converse(msg: string) {
    const userMessage = new Message(msg, 'user', new Date());
    this.update(userMessage);
    return this.client.textRequest(msg).then(res => {
      const speech = res.result.fulfillment.speech;
      const botMessage = new Message(speech, 'bot', new Date());
      this.update(botMessage);
    })
  }


}
