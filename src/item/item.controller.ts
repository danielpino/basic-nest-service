import { Controller, Get } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller()
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get('/item')
  getHello(): string {
    return this.itemService.getHello();
  }
}
