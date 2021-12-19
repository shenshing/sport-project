import { Injectable } from "@nestjs/common";
import { hash } from 'bcryptjs';

import * as U from '../../module/user/user/api/admin/user.dto';
import { FileRepository } from "../upload/repository";
import { UserRepository } from "../user/user/repository/user.repository";

@Injectable()
export class AuthService {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly fileRepository: FileRepository
    ) {}


    test() {
        return 'auth service';
    }


    async register(body: U.UserBody): Promise<any> {

        let password;
        if (body.password) {
          password = await hash(body.password, 5);
        }

        if(!body.profileImageId && !body.profileImageUrl) {
            


            body.profileImageId = 'a';
            body.profileImageUrl = 'a';
        }


        await this.userRepository.save({...body, password});

        

        return {
            message: 'ok'
        }
    }
}