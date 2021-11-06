import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('pruducts')
export class PruductsController {
    
    @Get()
    getAll():string{
        return 'getall'
    }
    @Get(':id')
    getOne(@Param('id') id:string):string{
        return 'getone '+id
    }
    @Post()
    create(@Body() createProductDto: CreateProductDto):string{
        // console.log(createProductDto);
        
        return `Title: ${createProductDto.title} Price ${createProductDto.price}`
    }
    @Delete(':id')
    delete(@Param('id') id:string):string{
        return 'Remove ' +id
    }
    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto,@Param('id') id:string): string{ 
        return 'update'+id
    }
}
