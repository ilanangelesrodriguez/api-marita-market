import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpStatus,
  HttpCode,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Notification } from './notification.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  @ApiOperation({ summary: 'Enviar una nueva notificación' })
  @ApiResponse({ status: 201, description: 'Notificación enviada correctamente.' })
  @HttpCode(HttpStatus.CREATED)
  async sendNotification(@Body() createNotificationDto: CreateNotificationDto): Promise<Notification> {
    return this.notificationsService.sendNotification(createNotificationDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ summary: 'Obtener una notificación por su ID' })
  @ApiResponse({ status: 200, description: 'Notificación obtenida correctamente.' })
  @ApiResponse({ status: 404, description: 'Notificación no encontrada.' })
  async getNotification(@Param('id') id: number): Promise<Notification> {
    return this.notificationsService.getNotification(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  @ApiOperation({ summary: 'Obtener todas las notificaciones' })
  @ApiResponse({ status: 200, description: 'Notificaciones obtenidas correctamente.' })
  async getAllNotifications(): Promise<Notification[]> {
    return this.notificationsService.getAllNotifications();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una notificación por su ID' })
  @ApiResponse({ status: 204, description: 'Notificación eliminada correctamente.' })
  @ApiResponse({ status: 404, description: 'Notificación no encontrada.' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteNotification(@Param('id') id: number): Promise<void> {
    return this.notificationsService.deleteNotification(id);
  }
}
