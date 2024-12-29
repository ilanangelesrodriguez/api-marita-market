import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Device } from './device.entity';
import { User } from '../users/user.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Device, User])],
  providers: [DevicesService],
  controllers: [DevicesController]
})
export class DevicesModule {}
