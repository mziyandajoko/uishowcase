import './App.css';
import NavigationBar from './components/NavBar'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
// imports pages

import Home from './pages/Home'
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router>
      <NavigationBar />
    <Switch>
      <Route path="/" exact component={Home}/>

    </Switch>

  </Router>
</>
  );
}

export default App;
