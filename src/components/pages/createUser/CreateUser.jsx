import React from 'react';
import './createUser.css';

export default function CreateUser() {
    return (
        <div className="createUser">
            <h1>Create New User</h1>
            <form>
                <div className="createUserItem">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Your Name" id="username" />
                </div>
                <div className="createUserItem">
                    <label htmlFor="fullname">fullname</label>
                    <input
                        type="text"
                        placeholder=" Your fullname"
                        id="fullname"
                    />
                </div>
                <div className="createUserItem">
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        id="email"
                    />
                </div>
                <div className="createUserItem">
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        id="password"
                    />
                </div>
                <div className="createUserItem">
                    <label htmlFor="phone">phone</label>
                    <input
                        type="text"
                        placeholder="Enter a phone number"
                        id="phone"
                    />
                </div>
                <div className="createUserItem">
                    <label htmlFor="address">address</label>
                    <input
                        type="text"
                        placeholder="Enter your address"
                        id="address"
                    />
                </div>
                <div className="createUserItem">
                    <label>Action</label>
                    <div className="actionContainer">
                        <select name="action">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <div className="createUserItem">
                    <label>gender</label>
                    <div className="genderContainer">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                        />
                        <label htmlFor="male">male</label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            id="female"
                        />
                        <label htmlFor="female">female</label>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            id="other"
                        />
                        <label htmlFor="other">other</label>
                    </div>
                </div>

                <button className="createBtn">Creare</button>
            </form>
        </div>
    );
}
