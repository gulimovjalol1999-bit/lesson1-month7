import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/item.dto';

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @HttpCode(200)
  @Get()
  getItems() {
    return this.itemService.getItems();
  }

  @HttpCode(201)
  @Post()
  addItem(@Body() dto: CreateItemDto) {
    return this.itemService.addItem(dto);
  }

  @HttpCode(200)
  @Get(':id')
  getOneItem(@Param('id') id: string) {
    return this.itemService.getOneItem(+id);
  }

  @HttpCode(200)
  @Patch('update/:id')
  updateItem(@Param('id') id: string, @Body() dto: Partial<CreateItemDto>) {
    return this.itemService.updateItem(+id, dto);
  }

  @HttpCode(200)
  @Delete('delete/:id')
  deleteItem(@Param('id') id: string) {
    return this.itemService.deleteItem(+id);
  }
}
