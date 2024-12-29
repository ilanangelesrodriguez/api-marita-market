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
  @ApiOperation({ summary: 'Create a new device' })
  @ApiResponse({ status: 201, description: 'Device created successfully.' })
  @HttpCode(HttpStatus.CREATED)
  async createDevice(@Body() createDeviceDto: CreateDeviceDto): Promise<Device> {
    return this.devicesService.createDevice(createDeviceDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a device by its ID' })
  @ApiResponse({ status: 200, description: 'Device retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Device not found.' })
  async getDevice(@Param('id') id: number): Promise<Device> {
    return this.devicesService.getDevice(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all devices' })
  @ApiResponse({ status: 200, description: 'Devices retrieved successfully.' })
  async getAllDevices(): Promise<Device[]> {
    return this.devicesService.getAllDevices();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a device by its ID' })
  @ApiResponse({ status: 204, description: 'Device deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Device not found.' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteDevice(@Param('id') id: number): Promise<void> {
    return this.devicesService.deleteDevice(id);
  }
}