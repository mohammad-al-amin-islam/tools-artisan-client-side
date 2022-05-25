import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import NotFound from './Pages/Shared/NotFound';
import Footer from './Pages/Shared/Footer';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrders />} />
          <Route path='payment/:id' element={<Payment />} />
          <Route path='add-review' element={<AddReview />} />
          <Route path='my-profile' element={<MyProfile />} />
          <Route path='make-admin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
        </Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/my-portfolio' element={<MyPortfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
