import { Get, Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
  exports: [MovieModule],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}
