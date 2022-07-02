import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import pagePegawai from './components/PagePegawai/pagePegawai';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Menu from './components/Menu/Menu';
import Register from './components/Auth/Register';
import PostpDetails from './components/PostpDetails/PostpDetails';
import FormPelanggan from './components/FormPelanggan/FormPelanggan';
import FormAdmin from './components/FormPelanggan/FormAdmin';
import pagePelanggan from './components/PagePelanggan/pagePelanggan';
import pageTransaksi from './components/PageTransaksi/pageTransaksi';
import EditPelanggan from './components/EditPelanggan/EditPelanggan';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar />
          <Menu />
            <Switch>
                <Route path='/' exact component={() => <Redirect to="/pelanggan" /> } />
                <Route path='/postsp' exact component={pagePegawai} />
                <Route path='/postsp/search' exact component={pagePegawai} />
                <Route path="/postsp/:id" component={PostpDetails} />
                <Route path='/pelanggan' exact component={pagePelanggan} />
                <Route path='/posts/search' exact component={pagePelanggan} />
                <Route path="/posts/:id" component={pagePelanggan} />
                <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/postsp" />)} />
                <Route path='/registernyohaka154555' exact component={Register} />
                <Route path='/formpelanggan' exact component={FormPelanggan} />
                <Route path='/formpelanggan/:id' exact component={EditPelanggan} />
                <Route path='/formAdmin' exact component={FormAdmin} />
                <Route path='/transaksi' exact component={pageTransaksi} />
            </Switch>
        </Container>
    </BrowserRouter>
  );
};

export default App;
