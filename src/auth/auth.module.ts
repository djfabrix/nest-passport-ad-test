import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AdStrategy } from "./strategies/ad.strategy";
import {PassportModule} from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  controllers: [AuthController],
  providers: [AuthService, AdStrategy]
})

export class AuthModule {

}
