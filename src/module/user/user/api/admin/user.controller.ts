import { Controller, Get } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AdminUserService } from "./user.service";

@ApiTags('User')
@Controller('v1/admin/users')
@ApiBearerAuth()
export class AdminUserController {

    constructor(
        private readonly service: AdminUserService
    ) {}

    @Get()
    @ApiOperation({summary: 'admin user service test'})
    test() {
        return this.service.test();
    }
}