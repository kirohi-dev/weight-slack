import { SlackRepository } from './SlackRepository';

describe('SendSlackRepository', () => {
  describe('#sendMessage', () => {
    it('should send message', async () => {
      const repository = new SlackRepository();
      await repository.sendMessage({
        message: 'test',
      });
    });
  });
});
