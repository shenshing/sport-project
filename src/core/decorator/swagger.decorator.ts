import { applyDecorators } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";

export const ApiFileBody = (fieldName: string) => applyDecorators(
    ApiBody({
        schema: {
            type: 'object',
            properties: {
              [fieldName]: {
                type: 'string',
                format: 'binary'
              }
            }
          }
    })
)