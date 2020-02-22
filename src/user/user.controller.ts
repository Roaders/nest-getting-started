import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {

    constructor(private service: UserService){}

    @Get()
    getAll(): Promise<User[]> {
      return this.service.getUsers()
    }

}
