import { Module } from "@nestjs/common";
import { UploadController } from "./api/upload.controller";
import { UploadApiModule } from "./api/upload.module";
import { UploadService } from "./api/upload.service";

export const UploadModuleImport = [UploadApiModule];

@Module({
    imports: UploadModuleImport,
    controllers: [UploadController],
    providers: [UploadService],
    exports: []
})

export class UploadModule {}