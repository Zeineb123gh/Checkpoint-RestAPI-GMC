import { Route, Switch } from "react-router-dom";

import "./App.css";
import Footer from "./Comonents/Footer";
import NavBar from "./Comonents/NavBar";
import AddContact from "./Pages/AddContact";
import ContactList from "./Pages/ContactList";
import Error from "./Pages/Error";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={ContactList} />
        <Route
          path={["/addContact", "/editContact/:id"]}
          component={AddContact}
        />
        <Route path="/*" component={Error} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
