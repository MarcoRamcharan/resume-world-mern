import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import MainLayout from './components/MainLayout';
import AddResume from './pages/AddResume';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Resume from './pages/Resume';
import UserLayout from './components/UserLayout';
import UserHome from './pages/UserHome';
import MyResume from './pages/MyResume'
import EditResume from './pages/EditResume'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='resume/:token' element={<Resume/>}/>
         </Route>
         <Route path='/user/dashboard' element={<UserLayout/>}>
          <Route index element={<UserHome/>}/>
          <Route path='addResume' element={<AddResume/>}/>
          <Route path='myResume' element={<MyResume/>}/>
          <Route path='editResume' element={<EditResume/>}/>
         </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
