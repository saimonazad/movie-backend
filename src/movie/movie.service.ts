import { Injectable } from '@nestjs/common';
import { paginateResponse } from '../lib/paginateResponse';
import { PrismaService } from '../prisma/prisma.service';
import { MovieDto } from './dto';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}
  resultPerPgae = 25;

  async getPopularMovies(dto: MovieDto) {
    const data = await this.prisma.$transaction([
      this.prisma.movie.count(),
      this.prisma.movie.findMany({
        take: this.resultPerPgae,
        skip: this.resultPerPgae * (dto.page - 1),
      }),
    ]);
    return paginateResponse({
      data,
      page: dto.page,
      limit: this.resultPerPgae,
    });
  }
  async getTopRatedMovies(dto: MovieDto) {
    const data = await this.prisma.$transaction([
      this.prisma.movie.count({
        where: {
          vote_average: {
            gt: 8,
          },
        },
      }),
      this.prisma.movie.findMany({
        where: {
          vote_average: {
            gt: 8,
          },
        },
        take: this.resultPerPgae,
        skip: this.resultPerPgae * (dto.page - 1),
      }),
    ]);
    return paginateResponse({
      data,
      page: dto.page,
      limit: this.resultPerPgae,
    });
  }
  async getNowPlayingMovies(dto: MovieDto) {
    const data = await this.prisma.$transaction([
      this.prisma.movie.count({
        where: {
          release_date: {
            gte: new Date('2022-08-01T00:00:00.000Z'),
          },
        },
      }),
      this.prisma.movie.findMany({
        where: {
          release_date: {
            gte: new Date('2022-08-01T00:00:00.000Z'),
          },
        },
        take: this.resultPerPgae,
        skip: this.resultPerPgae * (dto.page - 1),
      }),
    ]);
    return paginateResponse({
      data,
      page: dto.page,
      limit: this.resultPerPgae,
    });
  }
}
