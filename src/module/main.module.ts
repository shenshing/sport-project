import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UploadModule } from "./upload/upload.module";
import { UserModule, UserModuleImport } from "./user/user/main.module";

@Module({
    imports: [
        UserModule,
        AuthModule,
        UploadModule
    ]    
})

export class MainModule {}

export const MainModuleSwagger = [
    ...UserModuleImport
]