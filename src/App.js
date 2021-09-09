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
            <Route exact={true} path="/products">
              <Products />
            </Route>
            <Route path="/products/balkong">
              <Products from="balkong" />
            </Route>
            <Route path="/products/terass">
              <Products from="terass" />
            </Route>
            <Route path="/products/tillbehör">
              <Products from="tillbehör" />
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
