import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './item.dto';
import { Item } from 'src/interfaces/items';

@Injectable()
export class ItemService {
  private readonly items: Item[] = [];

  getAllItems(): string {
    return 'Hello Items!!';
  }

  postItem(newItem: CreateItemDto): string {
    return newItem.name;
  }
}
