import { BadRequestException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FileRepository } from './repository'

import * as path from 'path';
import { Response } from 'express';

@Injectable()
export class UploadService {

    constructor(
        private readonly fileRepository: FileRepository,

        private readonly configService: ConfigService,
    ) {}

    test() {
        return 'ok'
    }

    async uploadImage(file: Express.Multer.File) {
        // console.log('inside upload service');

        // console.log(file);

        console.log(file);
        console.log('------------------');
        const newName = `${file?.originalname}-${new Date().getTime()}`;

        console.log(newName);
        let currentTime = new Date().getTime();

        const fileObject = {
            name: `${file?.originalname}-${currentTime}`,
            originalName: file?.originalname,
            size: file?.size,
            url: `http://localhost:3000/c1/upload/${file?.originalname}-${currentTime}/image`,
            contentType: file?.mimetype,
            status: 'ACTIVE'
        }

        await this.fileRepository.save({...fileObject})


        return {
            message: 'ok'
        }
    }

    async getFileByName(filename: string, res: Response): Promise<any> {
        if(!filename) throw new BadRequestException('Please provide file name')

        const filePath = path.join(this.configService.get<string>('DEFAULT_IMAGE_PATH'), filename);

        res.sendFile(filePath)
    }
}