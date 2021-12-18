import { Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";

import * as U from '../../module/user/user/api/admin/user.dto';
import { DefaultProfileService } from "../default-profile/default-profile.service";

@ApiTags('Auth')
@Controller('v1/auth')
export class AuthController {

    constructor(
        private readonly service: AuthService,
        private readonly defaultProfileService: DefaultProfileService
    ) {}

    @Get()
    async test() {
        await this.defaultProfileService.generator('ly', 'shenshing');
        return this.service.test();
    }

    @Post()
    register(body: U.UserBody): Promise<any> {
        return this.service.register(body);
    }
}