import { BrowserRouter, Route, Link } from "react-router-dom";
const Mittens = () => {
    return (
        <div>
            <h1>HERE ARE SOME MITTENS</h1>
            <h2>
                Go <Link to="/">home</Link>
            </h2>
        </div>
    );
};
export default Mittens;
