import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'createUser' })
  create(createUserDto: any) {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern({ cmd: 'findAllUsers' })
  findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern({ cmd: 'findOneUser' })
  findOne(id: string) {
    return this.usersService.findOne(id);
  }

  @MessagePattern({ cmd: 'updateUser' })
  update(data: { id: string; updateUserDto: any }) {
    return this.usersService.update(data.id, data.updateUserDto);
  }

  @MessagePattern({ cmd: 'deleteUser' })
  delete(id: string) {
    return this.usersService.delete(id);
  }
}
