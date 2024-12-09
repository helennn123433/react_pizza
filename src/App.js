import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import NotFoundInfo from "./components/NotFoundInfo"
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart"  element={<Cart />}></Route>
              <Route path="*" element={<NotFoundInfo />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
