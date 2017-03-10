import { ISendable } from './isendable';
import { IPrintable } from './iprintable';
/*import { Injectable } from '@angular/core';

@Injectable()*/
export class AWSSMSService implements IPrintable, ISendable {

  // constructor() { }

  printMessage() {
    console.log('Print AWS Message');
  }

  sendMessage(): string {
    return 'Send AWS Message';
  }

}
