import { Module } from "@nestjs/common";
import { RestModule } from "src/provider/rest/rest.module";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";

@Module({
    imports: [
        RestModule.register('username', 'password',"token"),
    ],
    controllers: [PostController],
    providers: [PostService],
  })
  export class PostModule {}