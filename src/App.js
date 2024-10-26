
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
     
      <Login/>
      <SignUp/>
      <Navigation/>
     <Footer/>
    
    </div>
  );
}

export default App;
