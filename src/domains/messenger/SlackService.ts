import { ISendSlackContext } from 'models/messenger/SendSlackContext';
import { ISlackRepository } from './SlackRepository';

export interface ISlackService {
  sendMessage(context: ISendSlackContext): Promise<void>;
}

export class SlackService implements ISlackService {
  private repository: ISlackRepository;

  constructor(repository: ISlackRepository) {
    this.repository = repository;
  }

  sendMessage(context: ISendSlackContext): Promise<void> {
    return this.repository.sendMessage(context);
  }
}
