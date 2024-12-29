import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  @ApiOperation({ summary: 'Enviar una nueva notificación' })
  @ApiResponse({ status: 201, description: 'Notificación enviada correctamente.' })
  async sendNotification(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.sendNotification(createNotificationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una notificación por su ID' })
  @ApiResponse({ status: 200, description: 'Notificación obtenida correctamente.' })
  async getNotification(@Param('id') id: number) {
    return this.notificationsService.getNotification(id);
  }
}
