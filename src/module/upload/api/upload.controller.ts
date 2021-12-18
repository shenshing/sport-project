import { Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiFileBody } from "src/core/decorator";
import { UploadService } from "./upload.service";

@ApiTags('Upload')
@Controller('v1/upload')
@ApiBearerAuth()
export class UploadController {

    constructor(
        private readonly service: UploadService
    ) {}


    @Get()
    @ApiOperation({summary: 'test'})
    get() {
        return this.service.test();
    }

    @Post('image')
    @ApiOperation({summary: 'Upload image'})
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiFileBody('filename')
    uploadImage(@UploadedFile() file: Express.Multer.File) {
        return this.service.uploadImage(file);
    }




}