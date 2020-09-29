import { SendSlackRepository } from './SendSlackRepository';

describe('SendSlackRepository', () => {
  describe('#sendMessage', () => {
    it('should send message', async () => {
      const repository = new SendSlackRepository();
      await repository.sendMessage({
        message: 'test',
      });
    });
  });
});
