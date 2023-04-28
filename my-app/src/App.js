import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer />
          </Route>
          <Route path="/category/:categoryId">
            <ItemListContainer />
          </Route>
          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;