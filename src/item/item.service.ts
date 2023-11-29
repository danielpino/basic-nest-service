import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './item.dto';

@Injectable()
export class ItemService {

  getItems(): string {
    return 'Hello Items!!';
  }
  postItem(newItem: CreateItemDto): string {
    return newItem.name;
  }
}
