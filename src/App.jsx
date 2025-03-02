import Head from "./components/Header/Head";
import Foot from "./components/Footer/Foot";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import "./App.css"
// import SignUp from "./pages/signup";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Head />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            {/* <Route
                    path="/sign-up"
                    element={<SignUp />}
                /> */}
          </Routes>
          <Foot />
        </div>
      </Router>
    </div>
  );
}

export default App;
