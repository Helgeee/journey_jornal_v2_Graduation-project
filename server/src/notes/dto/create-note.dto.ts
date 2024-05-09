import { IsNumber, IsOptional, IsString } from "class-validator"
import { Collection } from "src/collection/entities/collection.entity"

import { User } from "src/user/entities/user.entity"


export class CreateNoteDto {

    @IsOptional()
    img?: string

    @IsString()
    title: string

    @IsOptional()
    @IsNumber()
    coordinate: number 
    
    @IsOptional()
    @IsString()
    text: string

    @IsOptional()
    collection?: Collection

    @IsOptional()
    user?: User
}
