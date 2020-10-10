import axios from 'axios';
import dotenv from 'dotenv';
import { ISendSlackContext } from 'models/messenger/SendSlackContext';

dotenv.config();

export interface ISlackRepository {
  sendMessage(context: ISendSlackContext): Promise<void>;
}

export class SlackRepository implements ISlackRepository {
  async sendMessage(context: ISendSlackContext): Promise<void> {
    const headers = {
      accept: 'application/json',
    };
    console.log('----- init');
    if (process.env && process.env.SLACK_WEBHOOK_URL) {
      console.log('ok');
      await axios.post(
        process.env.SLACK_WEBHOOK_URL,
        {
          text: context.message,
        },
        { headers }
      );
      return;
    }
    console.error('process env not found');
  }
}
