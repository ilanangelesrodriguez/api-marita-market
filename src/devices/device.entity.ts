import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Notification } from '../notifications/notification.entity';

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.devices)
  user: User;

  @Column()
  token: string;

  @Column()
  tipo: string; // android, ios, web

  @Column()
  estado: string; // activo, desconectado

  @ManyToOne(() => Notification, (notification) => notification.device)
  notifications: Notification[];
}
