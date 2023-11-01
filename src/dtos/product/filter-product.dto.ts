import { IsAlphanumeric, IsOptional, IsString } from "class-validator";

class FilterDto extends PaginationDto {
    @IsOptional()
    @IsString()
    readonly title;

    @IsOptional()
    @IsAlphanumeric()
    readonly code;
}