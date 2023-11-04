import React, { useState } from "react";
interface Istate {
  message: string;
}

const First: React.FC = () => {
  const [state, setState] = useState<Istate>({
    message: "Hello! How are you doing?",
  });
  const greetings = (greet: string): void => {
    setState({ message: greet });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="card m-5">
            <div className="card-body">
              <h1>{state.message}</h1>
              <button
                className="btn btn-danger m-2"
                onClick={() => greetings("Thanks for Liking US")}
              >
                LIKE
              </button>
              <button
                className="btn btn-success m-2"
                onClick={() => greetings("We wil reach you out soon")}
              >
                COMMENT
              </button>
              <button
                className="btn btn-warning m-2"
                onClick={() => greetings("We value what you share <3")}
              >
                SHARE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default First;
