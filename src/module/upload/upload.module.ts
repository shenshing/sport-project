import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FileRepository } from "./repository";
import { UploadController } from "./upload.controller";
import { UploadService } from "./upload.service";

@Module({
    imports: [TypeOrmModule.forFeature([
        FileRepository
    ])],
    controllers: [UploadController],
    providers: [UploadService],
    exports: [UploadService]
})

export class UploadModule {}