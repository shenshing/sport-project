import { Module } from "@nestjs/common";
import { AdminUserModule } from "./api/admin/user.module";
import { ClientUserModule } from "./api/client/user.module";

export const UserModuleImport = [AdminUserModule, ClientUserModule];

@Module({
    imports: UserModuleImport,
    providers: [],
    controllers: [],
    exports: []
})

export class UserModule {}