import React from 'react';
import './App.css';
// import Calculator from './components/cal2';
// import Counter from './components/counter';
// import First  from './components/first';
// import Customer from "./components/customer"
// import { Users } from "./components/users"
// import Form from './components/loginform';
// import Userlist from './components/userlist';
// import Users from './components/users';
// import Calculator from './components/cal2';
import List from './Todo-list/todo-list';

function App() {
  return (
    <div>
      {/* <div className='container'>
        <div className="row">
          <div className='col-md-6'>
            <Customer name='Yusra Khan' title='Miss' age={15}/>
          </div>
          <div className='col-md-6'>
            <Users userId={1234} username='Admin' userkey={908} />       
          </div>
        </div>
      </div> */}
      {/* <Counter />
      <First /> */}
      {/* <Form /> */}
      {/* <Userlist /> */}
      {/* <Calculator /> */}
      {/* <Users/> */}
      <List/>

    </div>
  );
}

export default App;
