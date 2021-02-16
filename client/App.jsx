import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch, //use if needed
  useParams, // use if needed
} from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { Button, ListGroup, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from './context/context.jsx';
import { AuthContext } from './context/authContext.jsx';
import Header from './components/global/Header.jsx';
import Footer from './components/global/Footer.jsx';
import BookDetail from './components/global/BookDetail.jsx';
import Profile from './components/profilePage/profilePage.jsx';
import { LoginModal, RegisterModal } from './components/global/loginRegisterModal.jsx';
import logout from './components/global/logout.js';
import MyLibrary from './components/profilePage/myLibrary.jsx';
import BookClub from './components/bookClubPage/BookClub.jsx';
import BookClubs from './components/bookClubPage/BookClubs.jsx';
import Subscriptions from './components/subscriptionsPage/Subscriptions.jsx';
import { ChangePasswordForm } from './components/global/ChangePasswordForm.jsx';
import Error from './components/global/Error.jsx';

export const App = () => {
  const user = useContext(AuthContext);
  const { exampleClubs } = useContext(AppContext);
  const [show, setShow] = useState(false);
  return (
    <Router>
      <Header user={user} />
      <main className='py-3' style={{ marginTop: '80px', marginBottom: '150px' }}>
        <Container>
          <Switch>
            <Route exact path='/' />
            <Route path='/profile' component={MyLibrary} />
            <Route exact path='/clubs' component={BookClubs} />
            {/* need to set up dynamic routing for different book clubs based on Id */}
            <Route path='/clubs/detail' component={BookClub} />
            <Route path='/subscriptions' component={Subscriptions} />
            <Route exact path='/changePassword/:email/:token' component={ChangePasswordForm} />
            <Route component={Error} />
          </Switch>
        </Container>
      </main>
      <Button variant='primary' onClick={() => setShow(true)}>
        Open Example Book Detail Modal
      </Button>
      <BookDetail
        handleClose={() => {
          setShow(false);
        }}
        show={show}
      />
      <Footer />
    </Router>
  );
};
