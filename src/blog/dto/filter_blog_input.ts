import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MinLength,
} from 'class-validator';





@InputType()
export class BlogFilterInput {
  @IsOptional()
  @Field({ nullable: true, defaultValue: 1 })
  page: number;

  @IsOptional()
  @Field({ nullable: true, defaultValue: 10 })
  limit: number;

  @IsOptional()
  @Field({ nullable: true, defaultValue: 'ASC'})
  sort: string;
}
