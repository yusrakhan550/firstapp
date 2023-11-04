import React,{useState} from "react";
interface Istate{
    count: number
}
interface IPORPS{}

const Counter:React.FC = () => {
    const [state,setState] = useState<Istate>({count:0 ,});

    //increment function
    const incrementing = ( ) => {
        setState ({count: state.count + 1})
    }
    //decrement function
    const decrementing = ( ) => {
        setState ({count: state.count - 1})
    }
    return(
        <>
            <h1 className="m-3">Event Handling Button</h1>
            <div className="row">
                <div className="col-md-3 m-5">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Counter</h2>
                            <h2 className="display-3 text-center">{state.count}</h2>
                            <button className="btn btn-success m-2" onClick={() => incrementing()}>Incremenet</button>                                
                            <button className="btn btn-danger m-2" onClick={decrementing}>Decremenet</button>                                
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter