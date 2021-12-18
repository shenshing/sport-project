import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DefaultProfileModule } from "../default-profile/defaul-profile.module";
import { UserRepository } from "../user/user/repository/user.repository";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

export const AuthModuleImport = []

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserRepository
        ]),
        DefaultProfileModule,
    ],
    providers: [AuthService],
    controllers: [AuthController],
    exports: []
})

export class AuthModule {}