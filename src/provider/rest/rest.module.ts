import { DynamicModule, Module } from '@nestjs/common';
import { RestService } from './rest.service';

@Module({})
export class RestModule {
    static register(username: string, password: string, auth: string): DynamicModule {
        return {
            module: RestModule,
            providers: [
                {
                    provide: 'USERNAME',
                    useValue: username,
                },
                {
                    provide: 'PASSWORD',
                    useValue: password,
                },
                {
                    provide: 'AUTH',
                    useValue: auth,
                },
                RestService,
            ],
            exports: [RestService],
        };
    }
}