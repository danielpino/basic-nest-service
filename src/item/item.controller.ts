import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './item.dto';

@Controller('/items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get('/')
  getHello(): string {
    return this.itemService.getItems();
  }

  @Post('/')
  postItem(@Body() item: CreateItemDto): string {
    console.log('param item:', item);
    return this.itemService.postItem(item);
  }
}
