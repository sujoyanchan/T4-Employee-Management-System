import { useState, useRef } from 'react';
import axios from 'axios';

export default function Update() {

    const rId = useRef();
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    const hId = (event) => { setId(event.target.value) };
    const hName = (event) => { setName(event.target.value) };
    const hSalary = (event) => { setSalary(event.target.value) };

    const save = (event) => {
        let regex1 = /^[1-9]\d*$/;
        let regex2 = /^[a-zA-Z\s]+$/;
        if (id === '') {
            alert('id cannot be empty');
            setId('');
        }
        else if (!regex1.test(id)) {
            alert('id entered should be a positive integer');
            setId('');
        }
        else if (id.length > 5) {
            alert('id entered cannot be more than 5 digits');
            setId('');
        }
        else if (name === '') {
            alert('name cannot be empty');
        }
        else if (!regex2.test(name)) {
            alert('name entered should contain only letters');
            setName('');
        }
        else if (name.replace(/\s/g, '').length < 2 || name.replace(/\s/g, '').length > 15) {
            alert('name entered should be between 2 to 15 letters');
            setName('');
        }
        else if (salary === '') {
            alert('salary cannot be empty');
        }
        else if (!regex1.test(salary)) {
            alert('salary entered should be a positive integer ');
            setSalary('');
        }
        else if (salary.length < 4 || salary.length > 10) {
            alert('salary entered should be between 4 to 10 digits');
            setSalary('');
        }
        else {
            let data = { id, name, salary };
            let url = 'http://localhost:9000/modify';
            axios.put(url, data)
                .then(res => {
                    if (res.data.modifiedCount === 1) {
                        alert('DATA SUCCESSFULLY UPDATED IN DATABASE');
                        setId('');
                        setName('');
                        setSalary('');
                        rId.current.focus();
                    }
                    else {
                        alert('Employee not found');
                        setId('');
                        rId.current.focus();
                    }
                })
                .catch(err => alert('issue ' + err))
        }

    }

    return (
        <>
            <div className='container'>
                <h1>Update Employee</h1>
                <p>Current ID:</p>
                <input type="number" value={id} onChange={hId} ref={rId} />
                <p>New Name:</p>
                <input type="text" value={name} onChange={hName} />
                <p>New Salary:</p>
                <input type="number" value={salary} onChange={hSalary} />
                <br /><br />
                <button className="btn" type='button' onClick={save}>Save</button>
            </div>
        </>
    );
}