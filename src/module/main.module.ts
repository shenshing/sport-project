import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { FileApiModuleImport, FileModule } from "./file/main.module";
import { UploadModule } from "./upload/main.module";
import { UserModule, UserModuleImport } from "./user/user/main.module";

@Module({
    imports: [
        UserModule,
        AuthModule,
        UploadModule,
        FileModule
    ]    
})

export class MainModule {}

export const MainModuleSwagger = [
    ...UserModuleImport
]