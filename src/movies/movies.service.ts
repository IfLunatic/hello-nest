import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: number): Movie {
        const movie = this.movies.find(movie => movie.id === id);
        if (!movie) {
            throw new NotFoundException(`film with id: ${id} not found`);
        }
        return movie;    
    }

    remove(id: number) {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    create(movieData: CreateMovieDto) {
            this.movies.push( {
                id: this.movies.length + 1,
                ...movieData
            }
        )
    }

    patch(id: number, updateData: UpdateMovieDTO) {
        const movie = this.getOne(id);
        this.remove(id);
        this.movies.push({...movie, ...updateData});
    }
}
