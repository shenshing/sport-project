import { tuple } from "src/core/type";

export const StatusEnum = tuple('PENDING', 'ACTIVE', 'INACTIVE', 'DELETED');
export type StatusType = typeof StatusEnum[number];

export const FileTypeEnum = tuple('IMAGE', 'LOGO', 'VIDEO', 'DEFAULT-PROFILE', 'FILE');
export type FileType = typeof FileTypeEnum[number];