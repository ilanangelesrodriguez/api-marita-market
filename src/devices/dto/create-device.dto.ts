import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  token: string;

  @ApiProperty()
  tipo: string; // android, ios, web

  @ApiProperty()
  estado: string; // activo, desconectado
}