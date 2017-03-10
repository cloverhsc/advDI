import { AWSSMSService } from './awssms.service';
import { NotificationService } from './notification.service';
export class NotificationFactory {

  static createNotificationService(): NotificationService{
    return new NotificationService(this.createSMSService());
  }

  static createSMSService(): AWSSMSService {
    return new AWSSMSService();
  }
}
