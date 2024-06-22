// File: /frontend/src/Profile.js

import React, { useState, useEffect } from 'react';

const Profile = ({ token }) => {
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const fetchPlayer = async () => {
            const response = await fetch('/profile', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setPlayer(data);
        };
        fetchPlayer();
    }, [token]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const response = await fetch('/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(player)
        });
        if (response.ok) {
            console.log('Profile updated');
        }
    };

    if (!player) return null;

    return (
        <form onSubmit={handleUpdate}>
            <label>
                First Name:
                <input type="text" value={player.first_name} onChange={(e) => setPlayer({ ...player, first_name: e.target.value })} required />
            </label>
            <label>
                Last Name:
                <input type="text" value={player.last_name} onChange={(e) => setPlayer({ ...player, last_name: e.target.value })} required />
            </label>
            <label>
                Email:
                <input type="email" value={player.email} onChange={(e) => setPlayer({ ...player, email: e.target.value })} required />
            </label>
            <label>
                Mobile Number:
                <input type="tel" value={player.mobile_number} onChange={(e) => setPlayer({ ...player, mobile_number: e.target.value })} required />
            </label>
            <button type="submit">Update Profile</button>
            <div>
                <h3>Credits: {player.credits}</h3>
                <h3>Referred Players: {player.referred_count}</h3>
            </div>
            <button type="button" onClick={() => setToken('')}>Logout</button>
        </form>
    );
};

export default Profile;
