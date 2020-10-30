import './App.css';
import NavigationBar from './components/NavBar'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/Footer'
// imports pages

import Home from './pages/Home'
import Contact from './pages/Contact';
function App() {
  return (
    <>
    <Router>
      <NavigationBar />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/page/Contact"  component={Contact}/>

    </Switch>
    <Footer />
  </Router>
</>
  );
}

export default App;
