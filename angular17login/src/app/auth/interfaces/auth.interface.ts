export interface AuthResponse{
    ok: boolean;
    jwt: string;
    userDB: userDB;
}

export interface userDB{
    _id:string;
    name: string;
    email: string;
    password: string;
    __v: number;
}

export interface Usuario {
    uid: string;
    name: string;
}