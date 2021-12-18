import { Controller } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('Default Profile')
@ApiBearerAuth()
@Controller('v1/admin/default/profiles')
export class AdminDefaultProfileController {
    
}