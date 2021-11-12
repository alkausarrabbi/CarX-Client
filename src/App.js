import './App.css';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import AllProducts from './Components/AllProducts/AllProducts';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import BookNow from './Components/BookNow/BookNow';
import Dashboard from './Components/DashBoard/DashBoard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route exact path="/home">
         <Home></Home>
       </Route>
       <Route exact path="/allproducts">
         <AllProducts></AllProducts>
       </Route>
       <PrivateRoute  path="/dashboard">
        <Dashboard></Dashboard>
       </PrivateRoute>
       <PrivateRoute exact path="/allproducts/:id">
       <BookNow></BookNow>
       </PrivateRoute>
       <PrivateRoute exact path="/allproducts">
       <BookNow></BookNow>
       </PrivateRoute>
       <Route exact path="/login">
         <Login></Login>
       </Route>
       <Route exact path="/register">
        <Register></Register>
       </Route>
     </Switch>
     </Router>
     </AuthProvider>
     
    </div>
  );
}

export default App;

