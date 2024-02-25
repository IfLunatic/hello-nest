import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

    @Get()
    home() {
        return "Hello to api base of movies"
    }

}
