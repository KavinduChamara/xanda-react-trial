import "./sass/app.scss";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import Home from './pages/home';
  import Checkout from './pages/checkout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/checkout" exact element={<Checkout />} />
            </Routes>
        </Router>
    );
}

export default App;
