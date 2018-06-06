import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
   messages: string[] = []; //create an array of messages

  constructor() { }

   add(message: string) {
     this.messages.push(message);
   }

   clear() {
    this.messages = [];
   }
}
