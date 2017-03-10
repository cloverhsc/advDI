import { environment } from './../environments/environment';
import { ISendable } from './isendable';
export let SMSProvider = {
  provide: ISendable,
  useFactory: () => new environment.SMSService
}
