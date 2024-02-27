import { Link } from "react-router-dom";

export default function NavBar() {

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