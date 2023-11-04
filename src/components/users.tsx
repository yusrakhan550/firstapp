import React, {useEffect, useState} from "react";
import { IUsers } from "./models/IUsers";
import { UserSERVICE } from "./services/UserSERVICE";

interface IState{
    loading: boolean,
    Users: IUsers[],
    errorMSG: string
}

const Users: React.FC =  () => {
    const [state,setstate] = useState<IState>({
        loading: false,
        Users:[] as IUsers[],
        errorMSG: ''
    })

//network rqeuest
    useEffect(() => {
        setstate({...state, loading:true})
        UserSERVICE.GetAllUSers().then((res) => setstate({
            ...state, loading:false, Users:res.data
        }))
        .catch(err => setstate({
            ...state, loading: false, errorMSG:err.message
        }));
    },[]);

    const {loading, Users, errorMSG} = state

    return(
        <>
         <div className="conatainer">
            <h1 className="display-5 m-5">Data from APIs</h1>
            {errorMSG && (<p>{errorMSG}</p>)}
            {loading && <h1>Loading...</h1>}
            <table className="m-5 table table-stripped">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Username</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Users.length > 0 && Users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
         </div>
        </>
    )
}

export default Users