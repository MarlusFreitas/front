import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/pages/Home";
import Informacoes from "./components/pages/Informacoes";
import Contato from "./components/pages/Contato";
import Container from "./components/layout/Container";
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min-hight">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/informacoes">
            <Informacoes />
          </Route>
          <Route exact path="/contato">
            <Contato />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
