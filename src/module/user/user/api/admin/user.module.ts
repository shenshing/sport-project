import { Module } from "@nestjs/common";
import { AdminUserController } from "./user.controller";
import { AdminUserService } from "./user.service";

@Module({
    imports: [],
    providers: [AdminUserService],
    controllers: [AdminUserController],
    exports: [AdminUserService]
})

export class AdminUserModule {}