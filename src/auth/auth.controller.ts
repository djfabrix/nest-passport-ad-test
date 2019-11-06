import {Controller, Get, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    @UseGuards(AuthGuard('active'))
    @Get("/login")
    async login() {
        return "login";
    }
}
