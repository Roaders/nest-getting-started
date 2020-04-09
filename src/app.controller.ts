import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiQuery } from "@nestjs/swagger"

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    @ApiQuery({type: "string", name: "test"})
    getHello(): string {
        return this.appService.getHello();
    }
}
