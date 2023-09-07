import { BrowserRouter, Route, Link } from "react-router-dom";

const Socks = () => {
    return (
        <div>
            <h1>HERE ARE SOME SOCKS</h1>
            <h2>
                Go <Link to="/">home</Link>
            </h2>
        </div>
    );
};
export default Socks;
