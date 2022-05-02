import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Menu from './components/Menu/Menu';

const App = () => {
  //const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar />
          <Menu />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/auth' exact component={Auth} />
            </Switch>
        </Container>
    </BrowserRouter>
  );
};

export default App;
