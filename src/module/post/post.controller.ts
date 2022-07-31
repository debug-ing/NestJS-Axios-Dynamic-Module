import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CommentModel } from "src/provider/rest/response/comment.model";
import { PostModel } from "src/provider/rest/response/post.model";
import { AddPostDto } from "./dto/add-post.dto";
import { PostService } from "./post.service";

@Controller('post')
export class PostController {
    constructor(
        private readonly postService: PostService,
    ) { }

    @Get()
    getAllPosts(): Promise<PostModel[]> {
        return this.postService.getAllPosts();
    }

    @Get('/:id')
    getPostById(@Param('id', ParseIntPipe) id: number): Promise<PostModel> {
        return this.postService.getPostById(id);
    }

    @Post()
    addPost(@Body() post: AddPostDto): Promise<PostModel> {
        return this.postService.addPost(post);
    }

    @Get('/:id/comments')
    getComments(@Param('id', ParseIntPipe) id: number): Promise<CommentModel[]> {
        return this.postService.getComments(id);
    }
}