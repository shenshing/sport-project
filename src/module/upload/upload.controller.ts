import { Controller, Get, Param, Post, UploadedFile, UseInterceptors, Res } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiFileBody } from "src/core/decorator";
import { UploadService } from "./upload.service";
import { Response } from "express";

import * as D from './upload.dto';

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
        console.log('inside upload controller test');
        return this.service.test();
    }

    @Get(':filename/image')
    @ApiOperation({summary: 'Get file by name'})
    getFileByName(@Param() {filename}: D.FileName, @Res() res: Response): Promise<any> {
        console.log(filename);
        return this.service.getFileByName(filename, res);
    }

    @Post('image')
    @ApiOperation({summary: 'Upload image'})
    @UseInterceptors(FileInterceptor('filename'))
    @ApiConsumes('multipart/form-data')
    @ApiFileBody('filename')
    uploadImage(@UploadedFile() file: Express.Multer.File) {
        return this.service.uploadImage(file);
    }

    


}