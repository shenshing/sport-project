import { Module } from "@nestjs/common";
import { AdminFileModule } from "./api/admin/file.module";

export const FileApiModuleImport = [AdminFileModule];

@Module({
    imports: FileApiModuleImport,
    providers: [],
    controllers: [],
    exports: []
})

export class FileModule {}