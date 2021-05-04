import './App.css';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import store from './store';
import Logo from './components/Logo';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Footer from './components/Footer';
import Users from './components/Users';
import Games from './components/Games';
import ListItems from './components/ListItems';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div className="logoSection">
            <Logo />
          </div>
          <div className="header">
            <Header />
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/users" component={Users} />
              <Route path="/games" component={Games} />
              <Route path="/listItems" component={ListItems} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
