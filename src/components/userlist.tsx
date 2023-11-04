import React, {useState} from "react";
import { IUser } from "./models/IUser";
import { UserService } from "./services/UsersService";

interface Istate {
    users: IUser[]
}

const Userlist: React.FC = () => {
    const [state, setstate] = useState<Istate>({
        users: UserService.getAllUsers(),
    })
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Looping and Iterations In REACT</h1>
          <table className="table w-50 mt-5">
            <thead>
              <tr>
                <th scope="col">Sno</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>33</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>35</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jacob</td>
                <td>34</td>
              </tr>
            </tbody>
            {state.users.length > 0 && state.users.map(user => (
                <tr key={user.sno}>
                    <td>{user.sno}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Userlist;
