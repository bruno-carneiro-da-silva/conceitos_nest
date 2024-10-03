import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Column } from 'typeorm';

export class CreatePersonDto {
  @IsNotEmpty()
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(100)
  name: string;

  @IsStrongPassword()
  @IsNotEmpty()
  @MinLength(5)
  password: string;
}
