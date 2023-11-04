import { title } from "process";
import React, {useState} from "react";
import { deflate } from "zlib";

interface Istate {
    title: string;
    password: string
}
interface IPROPS {
    user: string;
    address: string;
}
let FunComp: React.FC<IPROPS> = ({user, address}) =>{
    const [state,setstate] = useState<Istate>({title: 'REACT' , password:'shakalakaboomboom'})
    return(
        <>
        <h1 className="text-white text-center bg-dark">Functional Component</h1>
        <div className="border-1px-solid bg-light mb-4" >
            <h3>User: {user}</h3>
            <h3>Addres: {address}</h3>
        </div>
        <div className="border-1px-solid bg-light mb-4 card p2" >
            <h1>Valuse from Istate</h1>
            <h3>Title: {state.title}</h3>
            <h3>Password: {state.password}</h3>
        </div>
        </>
    );
};
export default FunComp;