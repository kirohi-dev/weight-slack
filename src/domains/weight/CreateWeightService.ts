import { ISendClackContextTranslator } from 'translator/messenger/SendSlackContextTranslator';
import { IWeightContext } from 'models/weight/WeightContext';
import { ISendSlackService } from '../messenger/SendSlackService';

export interface ICreateWeightService {
  createWeight(context: IWeightContext): Promise<void>;
}

export class CreateWeightService implements ICreateWeightService {
  private sendSlackService: ISendSlackService;
  private translator: ISendClackContextTranslator;

  constructor(
    sendSlackService: ISendSlackService,
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
