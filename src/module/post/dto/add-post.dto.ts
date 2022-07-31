import { IsNumber, IsString } from "class-validator";

export class AddPostDto {

    @IsString()
    title:string;

    @IsString()
    body: string;

    @IsNumber()
    userId: number;   
}