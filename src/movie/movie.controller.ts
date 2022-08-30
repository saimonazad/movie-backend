import { MovieService } from './movie.service';
import { Controller, Get, Query } from '@nestjs/common';
import { MovieDto } from './dto';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get('popular')
  getPopularMovies(@Query() dto: MovieDto) {
    return this.movieService.getPopularMovies(dto);
  }
  @Get('top_rated')
  getTopRatedMovies(@Query() dto: MovieDto) {
    return this.movieService.getTopRatedMovies(dto);
  }
  @Get('now_playing')
  getNowPlayingMovies(@Query() dto: MovieDto) {
    return this.movieService.getNowPlayingMovies(dto);
  }
}
