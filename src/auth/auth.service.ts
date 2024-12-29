import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  // Función para validar el usuario y generar el JWT
  async login(loginDto: LoginDto) {
    const user: User = await this.userService.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    const payload = { email: user.email, sub: user.id }; // 'sub' es el ID del usuario
    return {
      access_token: this.jwtService.sign(payload), // Genera el JWT
    };
  }
}
