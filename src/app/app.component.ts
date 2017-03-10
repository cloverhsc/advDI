import { SMSProvider } from './smsprovider';
import { ISendable } from './isendable';

import { AWSSMSService } from './awssms.service';
import { NotificationService } from './notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    NotificationService,
    SMSProvider
  ]
})
export class AppComponent implements OnInit {
  title = 'app works!';

  private notificationService: NotificationService;

  constructor(notiServ: NotificationService) {
    this.notificationService = notiServ;
  }

  ngOnInit(): void {
    this.title = this.notificationService.showMessage();
  }
}
