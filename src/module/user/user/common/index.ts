import { tuple } from "src/core/type";

export const GenderEnum = tuple('MALE', 'FEMALE');
export type GenderType = typeof GenderEnum[number];