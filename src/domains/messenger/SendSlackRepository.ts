import axios from 'axios';
import { slack } from '@/env';
import { ISendSlackContext } from 'models/messenger/SendSlackContext';

export interface ISendSlackRepository {
  sendMessage(context: ISendSlackContext): Promise<void>;
}

export class SendSlackRepository implements ISendSlackRepository {
  async sendMessage(context: ISendSlackContext): Promise<void> {
    const headers = {
      accept: 'application/json',
    };
    await axios.post(
      slack.webhookUrl,
      {
        text: context.message,
      },
      { headers }
    );
  }
}
