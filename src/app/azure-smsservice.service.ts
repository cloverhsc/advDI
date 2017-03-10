import { Injectable } from '@angular/core';
import { ISendable } from './isendable';
import { IPrintable } from './iprintable';

@Injectable()
export class AzureSMSServiceService implements IPrintable, ISendable {

  printMessage() {
    console.log('Print Azure message');
  }

  sendMessage(): string {
    return 'Send Azure Message';
  }

}
