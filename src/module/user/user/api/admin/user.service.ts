import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminUserService {
    test() {
        return 'admin user service'
    }
}