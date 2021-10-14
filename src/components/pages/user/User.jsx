import React from 'react';
import './user.css';
import {
    PersonOutline,
    CalendarTodayOutlined,
    PhoneAndroidOutlined,
    MailOutline,
    LocationCityOutlined,
    Publish,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/createUser">
                    <button className="addUserBtn">Create</button>
                </Link>
            </div>
            <div className="userCotainer">
                <div className="userDisplay">
                    <img src="/images/avatar.png" alt="" />
                    <h3>Mehdi Hasan Shohan</h3>
                    <h5>Softwere Engineer</h5>
                    <div className="accountDeatails">
                        <h4>Account Details</h4>
                        <div className="accountDeatailsInfo">
                            <PersonOutline />
                            <span>mhshohan</span>
                        </div>
                        <div className="accountDeatailsInfo">
                            <CalendarTodayOutlined />
                            <span>17 April, 1997</span>
                        </div>
                        <div className="accountDeatailsInfo">
                            <PhoneAndroidOutlined />
                            <span>+8801711000000</span>
                        </div>
                        <div className="accountDeatailsInfo">
                            <MailOutline />
                            <span>mshohanhasan@gmail.com</span>
                        </div>
                        <div className="accountDeatailsInfo">
                            <LocationCityOutlined />
                            <span>Nobinbag hospital </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <h1 className="userUpdateTitle">Edit</h1>
                    <form>
                        <div className="formContainer">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label htmlFor="username">Username:</label>
                                    <input
                                        id="username"
                                        type="text"
                                        placeholder="mshohanhasan"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label htmlFor="fullname">
                                        Display Name:
                                    </label>
                                    <input
                                        id="fullname"
                                        type="text"
                                        placeholder="Mehdi Hasan Shohan"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        id="email"
                                        type="text"
                                        placeholder="mshohanhasan@gmail.com"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label htmlFor="phone">Phone:</label>
                                    <input
                                        id="phone"
                                        type="text"
                                        placeholder="+8801711000000"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label htmlFor="address">Address:</label>
                                    <input
                                        id="address"
                                        type="text"
                                        placeholder="Nobinbag hospital"
                                        className="userUpdateInput"
                                    />
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <img
                                    src="/images/avatar.png"
                                    alt=""
                                    className="userUpdateImg"
                                />
                                <label htmlFor="file">
                                    <Publish /> Upload
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    style={{ display: 'none' }}
                                />
                            </div>
                        </div>
                        <button className="updateBtn">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
