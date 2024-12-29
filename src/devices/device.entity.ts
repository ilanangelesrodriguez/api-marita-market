import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Notification } from '../notifications/notification.entity';

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.devices, { nullable: false })
  user: User;

  @Column({ nullable: false })
  token: string;

  @Column({ nullable: false })
  tipo: string; // android, ios, web

  @Column({ nullable: false })
  estado: string; // activo, desconectado

  @ManyToOne(() => Notification, (notification) => notification.device, { nullable: false })
  notifications: Notification[];
}
