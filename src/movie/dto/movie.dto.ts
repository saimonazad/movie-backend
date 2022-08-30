import { Transform, Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

export class MovieDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  page: number;
}
