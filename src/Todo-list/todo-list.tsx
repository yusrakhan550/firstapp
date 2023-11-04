import React, { useState } from "react";
import "./todo-list.css"

interface item  {
    task: string;
    del: boolean;
    newtask: boolean
}

const List = (): void => {
    const [task, settasks] = useState<string[]>([]);
    const [newtask, setnewtask] = useState('');
    const [deltask, setdeltask] = useState<string[]>([]);


    const handle_add = () =>{
        if (newtask.trim() !== ''){
        settasks([...task,newtask])
        setnewtask('')
    }

    return (
        <>
            <div className="text-center mt-5">
                <div><h1>To-do List</h1></div>

                <div className="input-group mb-3 w-50 ">
                    <input type="text" className="form-control" placeholder="Enter your new task" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={handle_add}>Save</button>
                    </div>
                    <div>
                        <p>{}</p>
                    </div>
                </div>


            </div>
        </>
    )
}
}
export default List