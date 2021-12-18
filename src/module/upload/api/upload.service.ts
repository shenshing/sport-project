import { Injectable } from "@nestjs/common";

@Injectable()
export class UploadService {

    test() {
        return 'ok'
    }

    async uploadImage(file) {

        console.log(file);

        return {
            message: 'ok'
        }
    }
}