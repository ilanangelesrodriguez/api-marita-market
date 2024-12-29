import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrae el token del header Authorization: Bearer <token>
      secretOrKey: 'SECRET_KEY', // La misma clave secreta usada para firmar el token
    });
  }

  async validate(payload: JwtPayload) {
    return { userId: payload.sub, email: payload.email }; // Aquí puedes devolver la información del usuario
  }
}
