import { ISendClackContextTranslator } from 'translator/messenger/SendSlackContextTranslator';
import { IWeightContext } from 'models/weight/WeightContext';
import { ISlackService } from '../messenger/SlackService';

export interface ICreateWeightService {
  createWeight(context: IWeightContext): Promise<void>;
}

export class CreateWeightService implements ICreateWeightService {
  private sendSlackService: ISlackService;
  private translator: ISendClackContextTranslator;

  constructor(
    sendSlackService: ISlackService,
    translator: ISendClackContextTranslator
  ) {
    this.sendSlackService = sendSlackService;
    this.translator = translator;
  }
  async createWeight(context: IWeightContext): Promise<void> {
    // TODO: 永続化
    await this.sendSlackService.sendMessage(
      this.translator.translateFromWeightContext(context)
    );
  }
}
