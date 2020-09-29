import { Request } from 'express';
import { IWeightContext } from 'models/weight/WeightContext';

export interface IWeightContextTranslator {
  translateFromRequest(req: Request): IWeightContext;
}

export class WeightContextTranslator implements IWeightContextTranslator {
  translateFromRequest(req: Request): IWeightContext {
    console.log(req.body);
    return {
      weight: req.body.kg,
      fatPercent: req.body.percent,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
