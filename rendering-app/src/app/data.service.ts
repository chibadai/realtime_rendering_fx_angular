import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    // WebSocketのURLを設定してください
    this.socket$ = webSocket('wss://your-websocket-url');
  }

  getData() {
    return this.socket$.asObservable();
  }
}
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor() { }
// }
