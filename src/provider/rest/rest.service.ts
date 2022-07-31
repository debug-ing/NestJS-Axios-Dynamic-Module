import { Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { AxiosProvider } from "./config/axios";
import { PostDataDto } from "./model/post-data.model";
import { CommentModel } from "./response/comment.model";
import { PostModel } from "./response/post.model";

@Injectable()
export class RestService {
    private api: AxiosInstance;
    constructor(
        @Inject('USERNAME') private readonly username: string,
        @Inject('PASSWORD') private readonly password: string,
        @Inject('AUTH') private readonly auth: string
    ) {
        this.api = axios.create(AxiosProvider({
            username,
            password,
            auth,
        }));

    }

    async getAllPosts(): Promise<PostModel[]> {
        const response = await this.api.get('posts');
        if (response.status !== 200) {
            throw new InternalServerErrorException("Request Feild");
        }
        return response.data;
    }

    async getPost(id: number): Promise<PostModel> {
        const response = await this.api.get(`posts/${id}`);
        if (response.status !== 200) {
            throw new InternalServerErrorException("Request Feild");
        }
        return response.data;
    }

    async addPost(data: PostDataDto): Promise<PostModel> {
        const response = await this.api.post('posts', data);
        if (response.status !== 201) {
            throw new InternalServerErrorException("Request Feild");
        }
        return response.data;
    }

    async getComment(id: number): Promise<CommentModel[]> {
        const response = await this.api.get(`posts/${id}/comments`);
        if (response.status !== 200) {
            throw new InternalServerErrorException("Request Feild");
        }
        return response.data;
    }
}