import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import VendingMachine from "./VendingMachine";
import Navbar from "./Navbar";
import Socks from "./Socks";
import Mittens from "./Mittens";
import Jacket from "./Jacket";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Route exact path="/">
                        <Navbar />
                    </Route>
                </div>
                <div>
                    <Route exact path="/socks">
                        <div>
                            <Socks />
                        </div>
                    </Route>
                    <Route exact path="/mittens">
                        <Mittens />
                    </Route>
                    <Route exact path="/jacket">
                        <Jacket />
                    </Route>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
