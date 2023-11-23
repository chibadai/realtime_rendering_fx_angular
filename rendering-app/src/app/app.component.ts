import { Component, OnInit, OnDestroy } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SseService } from './sse.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<div>...</div>`
})
export class AppComponent implements OnInit, OnDestroy {
  // private sseSubscription: Subscription;
   private sseSubscription: Subscription= new Subscription()

  constructor(
    private sseService: SseService
    // private http: HttpClient
  ) {}

  ngOnInit() {
    // this.sseSubscription = this.sseService.getServerSentEvent('http://your-server-url/stream')
    // this.sseSubscription = this.sseService.getServerSentEvent('http://127.0.0.1:5000/stream')
    // this.sseSubscription = this.http.get('http://127.0.0.1:5000/stream', { responseType: 'text' })
    this.sseSubscription = this.sseService.getServerSentEvent('http://127.0.0.1:5000/stream')
      .subscribe({
        next: (data) => {
          console.log(data);
          // ここで受信したデータを扱います
        },
        error: (error) => console.error(error),
      });
  }

  ngOnDestroy() {
    if (this.sseSubscription) {
      this.sseSubscription.unsubscribe();
    }
  }
}
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.sass'
// })
// export class AppComponent {
//   title = 'rendering-app';
// }
