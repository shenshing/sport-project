import { IsNotEmptyString } from "src/core/decorator";

export class FileName {
    @IsNotEmptyString()
    filename!: string;
}