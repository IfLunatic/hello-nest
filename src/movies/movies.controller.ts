import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from '@nestjs/common';
import path from 'path';

@Controller('movies')
export class MoviesController {
    
    @Get()
    getAll() {
        return "This is where all the movies"
    }

    @Get('search')
    search(@Query('year') searchingYear: string) {
        return `We seach film with name after ${searchingYear} year`;
    }

    @Get(':id')
    getOne(@Param('id') movieId: string) {
        return `It's a place where one movie ${movieId}`;
    }

    @Post()
    create(@Body()movieData) {
        return movieData;
    }

    @Delete(':id') 
    remove (@Param('id') movieId: string) {
        return `This function remove film with id = ${movieId}`;
    }

    @Patch(':id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            updateMovie: movieId,
            ...updateData
        };
    }


}
