export interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    avatar: Avatar;

}

export interface UserSchema {
    authData?: User;
    init: boolean;
}

export interface Avatar {
    id: number;
    fileName: string;
    mimeType: string;
    size: number;
}
