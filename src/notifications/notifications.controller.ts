import { Controller, Get, Post, Body, Param, HttpStatus, HttpCode, Delete } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Notification } from './notification.entity';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  @ApiOperation({ summary: 'Enviar una nueva notificación' })
  @ApiResponse({ status: 201, description: 'Notificación enviada correctamente.' })
  @HttpCode(HttpStatus.CREATED)
  async sendNotification(@Body() createNotificationDto: CreateNotificationDto): Promise<Notification> {
    return this.notificationsService.sendNotification(createNotificationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una notificación por su ID' })
  @ApiResponse({ status: 200, description: 'Notificación obtenida correctamente.' })
  @ApiResponse({ status: 404, description: 'Notificación no encontrada.' })
  async getNotification(@Param('id') id: number): Promise<Notification> {
    return this.notificationsService.getNotification(id);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las notificaciones' })
  @ApiResponse({ status: 200, description: 'Notificaciones obtenidas correctamente.' })
  async getAllNotifications(): Promise<Notification[]> {
    return this.notificationsService.getAllNotifications();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una notificación por su ID' })
  @ApiResponse({ status: 204, description: 'Notificación eliminada correctamente.' })
  @ApiResponse({ status: 404, description: 'Notificación no encontrada.' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteNotification(@Param('id') id: number): Promise<void> {
    return this.notificationsService.deleteNotification(id);
  }
}
