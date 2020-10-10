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
    if (process.env && process.env.SLACK_WEBHOOK_URL) {
      await axios.post(
        process.env.SLACK_WEBHOOK_URL,
        {
          text: context.message,
        },
        { headers }
      );
      return;
    }
  }
}
