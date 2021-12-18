import { Controller, Get } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ClientUserService } from "./user.service";

@ApiTags('Client User')
@Controller('v1/users')
@ApiBearerAuth()
export class ClientUserController {

    constructor(
        private readonly service: ClientUserService
    ) {}

    @Get()
    @ApiOperation({summary: 'client user service test'})
    test() {
        return this.service.test();
    }


}