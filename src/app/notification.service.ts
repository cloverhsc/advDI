import { ISendable } from './isendable';
import { AWSSMSService } from './awssms.service';
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  constructor(private smsService: ISendable) {
  }

  showMessage(): string {
    return this.smsService.sendMessage();
  }

}
