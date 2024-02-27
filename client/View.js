import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

export default function View() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataWithDelay = () => {
            setTimeout(() => {
                let url = 'http://localhost:9000/read';
                axios.get(url)
                    .then(res => {
                        setData(res.data);
                        setLoading(false);
                    })
                    .catch(err => {
                        setLoading(false);
                        alert('issue ' + err);
                    });
            }, 3000);
        };

        fetchDataWithDelay();
    }, []);

    return (
        <>
            <div className='container'>
                <h1>View Employees</h1>
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        {data.length !== 0 ?
                            <table className='table2' border='3'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((emp, index) => (
                                        <tr key={index}>
                                            <td>{emp._id}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.salary}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            : <h3>Employees not found</h3>
                        }
                    </>
                )}
            </div>
        </>
    );
}
