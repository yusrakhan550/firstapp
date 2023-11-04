import Userlist from "../userlist"

import {IUser} from './../models/IUser';

export class UserService {
    private static users: IUser[] = [
            {sno: 1, name:'yusra', age:90},
            {sno: 1, name:'yusra', age:90},
            {sno: 1, name:'yusra', age:90},
    ]
    public static getAllUsers() {
        return this.users
    }
}
