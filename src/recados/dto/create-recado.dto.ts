import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateRecadoDto {
  @IsString({
    message: 'O texto do recado deve ser uma string.',
  })
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  readonly text: string;

  @IsString({
    message: 'O campo "from" deve ser uma string.',
  })
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  readonly from: string;

  @IsString({
    message: 'O campo "to" deve ser uma string.',
  })
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  readonly to: string;
}
