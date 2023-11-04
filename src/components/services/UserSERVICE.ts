import axios from "axios"

export class UserSERVICE {
    private static URL:string = 'https://jsonplaceholder.typicode.com'

    public static GetAllUSers(){
        let UsersURL: string = `${this.URL}/users`
        return axios.get(UsersURL)
    }
}