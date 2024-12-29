import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationDto {
  @ApiProperty()
  titulo: string;

  @ApiProperty()
  mensaje: string;

  @ApiProperty()
  fechaEnvio: Date;

  @ApiProperty()
  usuarioId: number;

  @ApiProperty()
  dispositivoId: number;

  @ApiProperty()
  canal: string; // push, email, etc.
}
