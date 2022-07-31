import { Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { CommentModel } from "src/provider/rest/response/comment.model";
import { RestService } from "src/provider/rest/rest.service";
import { PostModel } from "../../provider/rest/response/post.model";
import { AddPostDto } from "./dto/add-post.dto";

@Injectable()
export class PostService {
    constructor(private readonly restService: RestService) { }

    getAllPosts(): Promise<PostModel[]> {
        return this.restService.getAllPosts();
    }

    getPostById(id: number): Promise<PostModel> {
        return this.restService.getPost(id);
    }

    addPost(data: AddPostDto): Promise<PostModel> {
        return this.restService.addPost(data);
    }

    getComments(id: number): Promise<CommentModel[]> {
        return this.restService.getComment(id);
    }

}