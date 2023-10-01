export interface User {
    id: number;
    email: string;
    name: string;
    nick: string;
}

export interface UserSchema {
    authData?: User;
    init: boolean;
}
