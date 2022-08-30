import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:5849ns4tdwQ@@localhost:5432/moviedb?schema=public',
        },
      },
    });
  }
}
