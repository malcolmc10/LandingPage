import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import { motion } from "framer-motion"

function App() {
  return (
    <>
      <Router>

      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contactus' component={ContactUs} />
          
    </Switch>
      </Router>
     
      

   </>
  );
}

export default App;
