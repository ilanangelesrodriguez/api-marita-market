import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Device } from '../devices/device.entity';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  mensaje: string;

  @Column()
  fechaEnvio: Date;

  @ManyToOne(() => User, (user) => user.notifications, { nullable: true })
  user: User;

  @ManyToOne(() => Device, (device) => device.notifications, { nullable: true })
  device: Device;

  @Column()
  canal: string; // "push", "email", etc.
}
