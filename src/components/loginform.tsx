import React,{useState} from "react";
import { login } from "./models/loginform";

interface Istate{
    user:login
}

const Form: React.FC = () => {
    const [state,setState] = useState<Istate> ({
        user :{
            email:'',
            password:''
        }
    });
    const change = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        setState ({
            user: {
                ...state.user,
                [event.target.name]: event.target.value,
            },
        });
    };

    //submitting
    const submit =(event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(state.user)
        alert('Login successful');
    }
    return (
        <>
        <h1 className="m-5 text-center display-3">Login Form</h1>
            <div className="m-5 w-50">
                <form className="card p-4" onSubmit={submit}>
                <div className="form-group m-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        name="email"
                        value={state.user.email}
                        onChange={change}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group m-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={state.user.password}
                        onChange={change}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn btn-primary m-2">
                    Submit
                </button>
                </form>
            <div className="bg-light mt-4 p-3">
                <p>Your Inputted Data appears here:</p>
                <p>{JSON.stringify(state.user)}</p>
            </div>
            </div>
        </>
    );
};
export default Form;
