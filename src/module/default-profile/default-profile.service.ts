import { Injectable } from "@nestjs/common";

@Injectable()
export class DefaultProfileService {

    test() {
        return 'from default profile service';
    }

    async generator(firstName: string, lastName: string) {
        

        return {
            profileImageId: 'a',
            profileImageUrl: 'a'
        }
    }
}