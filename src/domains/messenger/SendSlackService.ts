import { ISendSlackContext } from 'models/messenger/SendSlackContext';
import { ISendSlackRepository } from './SendSlackRepository';

export interface ISendSlackService {
  sendMessage(context: ISendSlackContext): Promise<void>;
}

export class SendSlackService implements ISendSlackService {
  private repository: ISendSlackRepository;

  constructor(repository: ISendSlackRepository) {
    this.repository = repository;
  }

  sendMessage(context: ISendSlackContext): Promise<void> {
    return this.repository.sendMessage(context);
  }
}
