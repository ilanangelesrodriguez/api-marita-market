import { Entity, PrimaryGeneratedColumn, Column, RelationOptions, OneToMany } from 'typeorm';
import { Device } from '../devices/device.entity';
import { Notification } from '../notifications/notification.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  nombre: string;

  @Column()
  estado: string; // activo, inactivo, suspendido

  // Relación uno a muchos con Device
  @OneToMany(() => Device, (device) => device.user)
  devices: Device[];

  // Relación uno a muchos con Notification
  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];
}
