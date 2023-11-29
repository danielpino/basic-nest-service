import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './item.dto';

@Controller('/items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  getAll(): string {
    return this.itemService.getAllItems();
  }

  @Post()
  post(@Body() createItemDto: CreateItemDto): string {
    return this.itemService.postItem(createItemDto);
  }
}
