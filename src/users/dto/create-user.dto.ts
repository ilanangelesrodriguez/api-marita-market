import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  estado: string; // activo, inactivo, suspendido

  @ApiProperty()
  password: string;
}