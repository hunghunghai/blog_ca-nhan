import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import User from './Components/User';
import Contact from './Components/Contact';
import Error404 from './Components/Error404';
import { useState } from 'react';
import Detail from './Components/Detail';


function App() {
  const [users, setUsers] = useState([
    { id: '001', name: 'Mạnh Tuấn 1', email: 'hoangmanhtuan1@gamil.com' },
    { id: '002', name: 'Mạnh Tuấn 2', email: 'hoangmanhtuan2@gamil.com' },
    { id: '003', name: 'Mạnh Tuấn 3', email: 'hoangmanhtuan3@gamil.com' },
    { id: '004', name: 'Mạnh Tuấn 4', email: 'hoangmanhtuan4@gamil.com' },
    { id: '005', name: 'Mạnh Tuấn 5', email: 'hoangmanhtuan5@gamil.com' },
    { id: '006', name: 'Mạnh Tuấn 6', email: 'hoangmanhtuan6@gamil.com' },
    { id: '007', name: 'Mạnh Tuấn 7', email: 'hoangmanhtuan7@gamil.com' },
    { id: '008', name: 'Mạnh Tuấn 8', email: 'hoangmanhtuan8@gamil.com' },
    { id: '009', name: 'Mạnh Tuấn 9', email: 'hoangmanhtuan9@gamil.com' },
    // { id: '010', name: 'Mạnh Tuấn 10', email: 'hoangmanhtuan10@gamil.com' },
    // { id: '011', name: 'Mạnh Tuấn 11', email: 'hoangmanhtuan11@gamil.com' },
    // { id: '012', name: 'Mạnh Tuấn 12', email: 'hoangmanhtuan12@gamil.com' },
    // { id: '013', name: 'Mạnh Tuấn 13', email: 'hoangmanhtuan13@gamil.com' },
    // { id: '014', name: 'Mạnh Tuấn 14', email: 'hoangmanhtuan14@gamil.com' },
    // { id: '015', name: 'Mạnh Tuấn 15', email: 'hoangmanhtuan15@gamil.com' },
    // { id: '016', name: 'Mạnh Tuấn 16', email: 'hoangmanhtuan16@gamil.com' },
    // { id: '017', name: 'Mạnh Tuấn 17', email: 'hoangmanhtuan17@gamil.com' },
    // { id: '018', name: 'Mạnh Tuấn 18', email: 'hoangmanhtuan18@gamil.com' },
    // { id: '019', name: 'Mạnh Tuấn 19', email: 'hoangmanhtuan19@gamil.com' },
    // { id: '020', name: 'Mạnh Tuấn 20', email: 'hoangmanhtuan20@gamil.com' },
    // { id: '021', name: 'Mạnh Tuấn 21', email: 'hoangmanhtuan21@gamil.com' },
    // { id: '022', name: 'Mạnh Tuấn 22', email: 'hoangmanhtuan22@gamil.com' },
    // { id: '023', name: 'Mạnh Tuấn 23', email: 'hoangmanhtuan23@gamil.com' },
    // { id: '024', name: 'Mạnh Tuấn 24', email: 'hoangmanhtuan24@gamil.com' },
    // { id: '025', name: 'Mạnh Tuấn 25', email: 'hoangmanhtuan25@gamil.com' }
  ])
  return (
    // <div className="App">
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}  ></Route>
        <Route path='/User' element={<User users={users} />} ></Route>
        <Route path='/Contact' element={<Contact />} ></Route>
        <Route path={"/User/:userid"} element={<Detail users={users} />} />
        <Route path='*' element={<Error404 />}>Error</Route>
      </Routes>
    </div>
    // </div>
  );
}

export default App;
