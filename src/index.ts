import express from 'express';
import dotenv from 'dotenv';
import { SlackService } from '@/src/domains/messenger/SlackService';
import { SlackRepository } from '@/src/domains/messenger/SlackRepository';
import { CreateWeightService } from 'domains/weight/CreateWeightService';
import { SendClackContextTranslator } from 'translator/messenger/SendSlackContextTranslator';
import { WeightContextTranslator } from 'translator/weight/WeightContextTranslator';

dotenv.config(); // .envをprosess.envに割り当て

const sendClackContextTranslator = new SendClackContextTranslator();
const weightContextTranslator = new WeightContextTranslator();
const sendSlackRepository = new SlackRepository();
const sendSlackService = new SlackService(sendSlackRepository);
const createWeightService = new CreateWeightService(
  sendSlackService,
  sendClackContextTranslator
);

const app: express.Application = express();
const router: express.Router = express.Router();
const port = process.env.PORT || 8080;

app.use(express.json());

router.get('/', (req: express.Request, res: express.Response) => {
  res.send('test');
});

router.post(
  '/api/weight',
  async (req: express.Request, res: express.Response) => {
    await createWeightService.createWeight(
      weightContextTranslator.translateFromRequest(req)
    );
    res.send({ ok: 'ok' });
  }
);

app.use('/', router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
