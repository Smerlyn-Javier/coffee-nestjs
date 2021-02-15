import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
    @Get()
    findAll(@Query() paginationQuery):string{
      const {limit,offset} = paginationQuery;
      return `limit: ${limit} offset: ${offset}`;
      // return [{coffee:`🍵`},{bread:`🥐`}]
    }
    @Get(':id')
    findOne(@Param('id') id:string):[{id:string},{coffee:string},{bread:string}]{
     return [{id:`${id}`},{coffee:`🍵`},{bread:`🥐`}]
    }
    @Post()
    @HttpCode(HttpStatus.ACCEPTED)
    create(@Body() body){
      return body;
    }
    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
      return `Update element #${id}`
    }
    @Delete(':id')
    delete(@Param('id') id:string){
      return `Delete element #${id}`
    }
}
