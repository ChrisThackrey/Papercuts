import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch, //use if needed
  useParams, // use if needed
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/global/Header.jsx';
import Footer from './components/global/Footer.jsx';
import BookClub from './components/bookClubPage/BookClub.jsx';
import BookClubs from './components/bookClubPage/BookClubs.jsx';
import React, { useState, useContext } from 'react';
import { AppContext } from './context/context.jsx';
import { AuthContext, AuthProvider } from './context/authContext.jsx';
import BookDetail from './components/global/BookDetail.jsx';
import { Container, Button } from 'react-bootstrap';

export const App = () => {
  // const user = useContext(AuthContext);
  let user = 'brad';
  const { exampleClubs } = useContext(AppContext);
  const [show, setShow] = useState(true);
  return (
    <AuthProvider>
      <Router>
        <Header user={user} />
        <main className="py-3">
          <Container>
            {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
            <Switch>
              <Route exact path="/">
                {/* Cayla, put in your component here when ready */}
              </Route>
              <Route path="/profile">
                {/* Sean, Jerrick, put in your component here when ready */}
              </Route>
              <Route exact path="/clubs" component={BookClubs}></Route>
              <Route path="/clubs/detail" component={BookClub}></Route>
              <Route path="/subscriptions">{/* subscriptions path */}</Route>
            </Switch>
          </Container>
        </main>
        <Footer />
        <Button variant="primary" onClick={() => setShow(true)}>
          Open Example Book Detail Modal
        </Button>
        <BookDetail
          handleClose={() => {
            setShow(false);
          }}
          show={show}
        />
      </Router>
    </AuthProvider>
  );
};
