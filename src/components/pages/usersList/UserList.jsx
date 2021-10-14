import React, { useState } from 'react';
import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, EditOutlined } from '@material-ui/icons';
import { rows } from '../../data/userRows';
import { Link } from 'react-router-dom';

export default function UserList() {
    const [data, setData] = useState(rows);

    const handleClick = (id) => {
        setData(data.filter((user) => user.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'Id', width: 70 },
        {
            field: 'username',
            headerName: 'User',
            width: 220,
            renderCell: (params) => {
                return (
                    <div className="userListUsername">
                        <img
                            className="userListIconAvatar"
                            src={params.row.avatar}
                            alt={params.row.username}
                        />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: 'email', headerName: 'Email', width: 220 },
        { field: 'status', headerName: 'Status', width: 170 },
        { field: 'transition', headerName: 'Transections', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="iconContainer">
                        <Link to={`/user/${params.row.id}`}>
                            <EditOutlined className="ULicon" color="primary" />
                        </Link>
                        <DeleteOutline
                            className="ULicon"
                            color="error"
                            onClick={() => handleClick(params.row.id)}
                        />
                    </div>
                );
            },
        },
    ];
    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                checkboxSelection
                disableSelectionOnClick
                pageSize={8}
                pagination
            />
        </div>
    );
}
