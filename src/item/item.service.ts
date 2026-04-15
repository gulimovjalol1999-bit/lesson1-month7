import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/item.dto';

type Item = {
  id: number;
  title: string;
};

@Injectable()
export class ItemService {
  items: Item[] = [
    { id: 1, title: 'Nima' },
    { id: 2, title: 'Yaxshi narsa' },
  ];

  getItems(): Item[] {
    return this.items;
  }

  addItem(dto: CreateItemDto): Item {
    const newItem: Item = {
      id: this.items.length + 1,
      title: dto.title,
    };

    this.items.push(newItem);
    return newItem;
  }

  getOneItem(id: number): Item {
    const foundItem = this.items.find((item) => item.id === id);

    if (!foundItem) {
      throw new NotFoundException();
    }

    return foundItem;
  }

  updateItem(id: number, dto: Partial<CreateItemDto>): string {
    const index = this.items.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException();
    }

    this.items[index] = {
      ...this.items[index],
      ...dto,
    };

    return 'Updated';
  }

  deleteItem(id: number) {
    const index = this.items.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException();
    }

    this.items.splice(index, 1);

    return 'Deleted';
  }
}
