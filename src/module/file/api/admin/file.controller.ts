import { Controller, Get } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AdminFileService } from "./file.service";

@Controller('v1/admin/files')
@ApiTags('File')
@ApiBearerAuth()
export class AdminFileController {

    @Get()
    test() {
        return 'ok'
    }
}