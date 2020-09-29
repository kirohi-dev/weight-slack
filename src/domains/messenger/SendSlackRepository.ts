import axios from 'axios';
import dotenv from 'dotenv';
import { ISendSlackContext } from 'models/messenger/SendSlackContext';

dotenv.config();

export interface ISendSlackRepository {
  sendMessage(context: ISendSlackContext): Promise<void>;
}

export class SendSlackRepository implements ISendSlackRepository {
  async sendMessage(context: ISendSlackContext): Promise<void> {
    const headers = {
      accept: 'application/json',
    };
    console.log(process.env.SLACK_WEBHOOK_URL!);
    await axios.post(
      process.env.SLACK_WEBHOOK_URL!,
      {
        text: context.message,
      },
      { headers }
    );
  }
}
