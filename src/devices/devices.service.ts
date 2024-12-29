import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from './device.entity';
import { Repository } from 'typeorm';
import { CreateDeviceDto } from './dto/create-device.dto';
import { User } from '../users/user.entity';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Device)
    private readonly deviceRepository: Repository<Device>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createDevice(createDeviceDto: CreateDeviceDto): Promise<Device> {
    const user = await this.userRepository.findOne({ where: { id: createDeviceDto.userId } });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${createDeviceDto.userId} no encontrado`);
    }

    const device = this.deviceRepository.create({ ...createDeviceDto, user });
    return await this.deviceRepository.save(device);
  }

  async getDevice(id: number): Promise<Device> {
    const device = await this.deviceRepository.findOne({ where: { id } });
    if (!device) {
      throw new NotFoundException(`Dispositivo con ID ${id} no encontrado`);
    }
    return device;
  }

  async getAllDevices(): Promise<Device[]> {
    return await this.deviceRepository.find();
  }

  async deleteDevice(id: number): Promise<void> {
    const result = await this.deviceRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Dispositivo con ID ${id} no encontrado`);
    }
  }
}