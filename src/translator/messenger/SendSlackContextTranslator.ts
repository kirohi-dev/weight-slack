import { ISendSlackContext } from 'models/messenger/SendSlackContext';
import { IWeightContext } from 'models/weight/WeightContext';

export interface ISendClackContextTranslator {
  translateFromWeightContext(context: IWeightContext): ISendSlackContext;
}

export class SendClackContextTranslator implements ISendClackContextTranslator {
  translateFromWeightContext(context: IWeightContext): ISendSlackContext {
    return {
      message: `
      ただいま測定した体重は
      体重: ${context.weight} kg
      体脂肪率: ${context.fatPercent} %
      痩せなさい 
      `,
    };
  }
}
