import { Allow, IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber, IsPositive, IsString, isNotEmpty } from "class-validator";

export class BaseProductDto {
    @Allow()
    @IsNotEmpty()//isNotEmptyValidationOptions())//para transformar a español los mensajes
    @IsString()
    @IsAlpha()
    readonly title;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly price;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly description;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly image;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly code;
}