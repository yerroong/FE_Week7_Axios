import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
    axios
            .get(`https://reqres.in/api/users?page=1&per_page=9 `)
            .then((response) => {
                setUser(response.data.data);
            })
    }, [userId]);
    
    return (
        <>
            <h1>User Details</h1>
            <div>
                <img src={user.avatar} alt={user.first_name} />
                <h2>{`${user.first_name} ${user.last_name}`}</h2>
                <p>Email: {user.email}</p>
            </div>
        </>
    );
};

export default User;