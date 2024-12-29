import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationsService {
  async sendNotification(createNotificationDto: CreateNotificationDto) {
    // Aquí debes integrar la lógica para enviar la notificación push, por ejemplo, usando Firebase Cloud Messaging.
    return { message: 'Notificación enviada correctamente' };
  }

  async getNotification(id: number) {
    // Aquí debes obtener la notificación desde la base de datos
    return { id, titulo: 'Notificación de prueba', mensaje: 'Mensaje de prueba' };
  }
}
