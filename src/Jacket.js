import { BrowserRouter, Route, Link } from "react-router-dom";
const Jacket = () => {
    return (
        <div>
            <h1>HERE IS A JACKET</h1>
            <h2>
                Go <Link to="/">home</Link>
            </h2>
        </div>
    );
};
export default Jacket;
