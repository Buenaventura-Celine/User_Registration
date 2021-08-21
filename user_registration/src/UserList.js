import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const UserList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems([
            {name: "Celine", id: 0},
            {name: "August", id: 1},
            {name: "Sarah", id: 2} 
        ])
    }, [])

    return(
        <div className="container">
            <div className="mt-3">
                <h3>User List</h3>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(user => (
                                <tr key={user.id}>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        <Link to={`/edit/${user.id}`}>Edit</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}; 