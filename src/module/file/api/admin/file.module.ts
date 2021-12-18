import { Module } from "@nestjs/common";
import { AdminFileController } from "./file.controller";
import { AdminFileService } from "./file.service";

@Module({
    imports: [],
    controllers: [AdminFileController],
    providers: [AdminFileService],
    exports: []
})

export class AdminFileModule {}