import { Module } from "@nestjs/common";
import { DefaultProfileModule } from "src/module/default-profile/defaul-profile.module";

@Module({
    imports: [
        DefaultProfileModule
    ]
})

export class ServiceModule {}