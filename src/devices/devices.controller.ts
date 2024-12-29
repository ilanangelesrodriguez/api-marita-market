import {
  Body,
  Controller, Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Device } from './device.entity';
import { CreateDeviceDto } from './dto/create-device.dto';
import { DevicesService } from './devices.service';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo dispositivo' })
  @ApiResponse({ status: 201, description: 'Dispositivo creado correctamente.' })
  @HttpCode(HttpStatus.CREATED)
  async createDevice(@Body() createDeviceDto: CreateDeviceDto): Promise<Device> {
    return this.devicesService.createDevice(createDeviceDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un dispositivo por su ID' })
  @ApiResponse({ status: 200, description: 'Dispositivo obtenido correctamente.' })
  @ApiResponse({ status: 404, description: 'Dispositivo no encontrado.' })
  async getDevice(@Param('id') id: number): Promise<Device> {
    return this.devicesService.getDevice(id);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los dispositivos' })
  @ApiResponse({ status: 200, description: 'Dispositivos obtenidos correctamente.' })
  async getAllDevices(): Promise<Device[]> {
    return this.devicesService.getAllDevices();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un dispositivo por su ID' })
  @ApiResponse({ status: 204, description: 'Dispositivo eliminado correctamente.' })
  @ApiResponse({ status: 404, description: 'Dispositivo no encontrado.' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteDevice(@Param('id') id: number): Promise<void> {
    return this.devicesService.deleteDevice(id);
  }
}