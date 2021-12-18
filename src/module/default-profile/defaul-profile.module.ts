import { Module } from "@nestjs/common";
import { DefaultProfileService } from "./default-profile.service";

@Module({
    imports: [],
    providers: [DefaultProfileService],
    exports: [DefaultProfileService]
})

export class DefaultProfileModule {}