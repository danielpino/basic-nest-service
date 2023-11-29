import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

describe('ItemController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ItemController],
      providers: [ItemService],
    }).compile();
  });

  describe('GET ALL', () => {
    it('should return "Hello World!"', () => {
      const itemController = app.get(ItemController);
      expect(itemController.getAll()).toBe('Hello Items!!');
    });
  });

  describe('POST', () => {
    it('should return the item name', () => {
      const itemController = app.get(ItemController);
      expect(itemController.post({ name: 'banger' })).toBe('banger');
    });

    it('should persist through a GET call the item name', () => {
      const itemController = app.get(ItemController);
      expect(itemController.post({ name: 'banger' })).toBe('banger');
    });
  });
});
