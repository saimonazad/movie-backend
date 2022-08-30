import { Module } from '@nestjs/common';

@Module({
  exports: [MovieModule],
})
export class MovieModule {}
