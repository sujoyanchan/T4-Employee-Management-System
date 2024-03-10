import { Link, useLocation } from "react-router-dom";

export default function NavBar() {

    const location = useLocation();
    const isHomePage = location.pathname === '/';
    if (isHomePage) {
        return null;
    }

    return (
        <>
            <div className="nav">
                <Link to='/'>Home</Link>
                <Link to='/add'>Add</Link>
                <Link to='/view'>View</Link>
                <Link to='/update'>Update</Link>
                <Link to='/delete'>Delete</Link>
            </div>
        </>
    );
}
