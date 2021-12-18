import { IsNotEmptyString, IsOptionalEmail, IsOptionalEnum, IsOptionalString } from "src/core/decorator/dto.decorator";

import * as T from '../../common';

export class UserBody {
    @IsNotEmptyString()
    name!: string;

    @IsOptionalEmail()
    email?: string;

    @IsNotEmptyString()
    phone!: string;

    @IsOptionalEnum(T.GenderEnum)
    gender?: T.GenderType | string;

    @IsOptionalString()
    password?: string;

    @IsNotEmptyString()
    profileImageId!: string;

    @IsNotEmptyString()
    profileImageUrl!: string;
}