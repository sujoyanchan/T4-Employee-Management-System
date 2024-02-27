import { useNavigate } from "react-router-dom";

export default function Home() {

    const nav = useNavigate();

    return (
        <>
            <h1>EMPLOYEE MANAGEMENT SYSTEM</h1>
            <table className='table1'>
                <tbody>
                    <tr>
                        <td>
                            <button className="btn" onClick={() => { nav('/add'); window.location.reload() }}>Add</button>
                        </td>
                        <td>
                            <button className="btn" onClick={() => { nav('/view'); window.location.reload() }}>View</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="btn" onClick={() => { nav('/update'); window.location.reload() }}>Update</button>
                        </td>
                        <td>
                            <button className="btn" onClick={() => { nav('/delete'); window.location.reload() }}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>

    );
}