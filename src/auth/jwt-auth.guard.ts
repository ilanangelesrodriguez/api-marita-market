import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Esta es una envoltura alrededor del guard AuthGuard de Passport, usando la estrategia 'jwt'
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
