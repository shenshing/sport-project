import { Injectable } from "@nestjs/common";

@Injectable()
export class ClientUserService {

    test() {
        return 'client user service'
    }
}