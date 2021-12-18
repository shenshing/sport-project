import { applyDecorators } from "@nestjs/common";
import { ApiProperty, ApiPropertyOptional, ApiPropertyOptions } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

// Optional
export const IsOptionalString           = (options?: ApiPropertyOptions) => applyDecorators(IsOptional(), ApiPropertyOptional(options), IsString()); // prettier-ignore
export const IsOptionalEnum             = (e: any[], options?: ApiPropertyOptions) => applyDecorators(IsOptional(), ApiPropertyOptional({ type: String, enum: e, ...options }), IsEnum(e)); // prettier-ignore
export const IsOptionalEmail            = (options?: ApiPropertyOptions) => applyDecorators(IsOptional(), ApiPropertyOptional(options), IsEmail({}, { message: 'Please provide a valid email address.' })); // prettier-ignore



// Not Empty
export const IsNotEmptyString          = (options?: ApiPropertyOptions) => applyDecorators(IsNotEmpty(), ApiProperty(options), IsString()); // prettier-ignore
