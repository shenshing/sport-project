import { Module } from "@nestjs/common";
import { ClientUserController } from "./user.controller";
import { ClientUserService } from "./user.service";

@Module({
    imports: [],
    providers: [ClientUserService],
    controllers: [ClientUserController],
    exports: [ClientUserService]
})

export class ClientUserModule {}