
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./assets/theme";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Footer from "./components/Footer";
import BookingBtn from "./components/BookingBtn";
import Start from "./views/Start";
import Prices from "./views/Prices";
import Products from "./views/Products";
import How from "./views/How";
import Gallery from "./views/Gallery";
import Contact from "./views/Contact";
import Info from "./views/Info";


function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavbarContainer />
        <div style={{ padding: "5vh" }} />
        <BookingBtn />
        <Container disableGutters={true}>
          <Switch>
            <Route path="/" exact={true}>
              <Start />
            </Route>
            <Route path="info">
              <Info />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/prices">
              <Prices />
            </Route>
            <Route path="/how">
              <How />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route exact={true} path="/contact">
              <Contact />
            </Route>
            <Route path="/contact/privat">
              <Contact from="privat" />
            </Route>
            <Route path="/contact/brf">
              <Contact from="brf" />
            </Route>
            <Route path="/contact/om">
              <Contact from="om" />
            </Route>
            <Contact />
          </Switch>
        </Container>
        <div style={{ padding: "2vh" }} />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
