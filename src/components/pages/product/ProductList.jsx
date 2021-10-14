import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, EditOutlined } from '@material-ui/icons';
import { productRows } from '../../data/productRows';
import { Link } from 'react-router-dom';
import './productList.css';

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleClick = (id) => {
        setData(data.filter((user) => user.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'Id', width: 70 },
        {
            field: 'products',
            headerName: 'Products',
            width: 220,
            renderCell: (params) => {
                return (
                    <div className="productsListUsername">
                        <img
                            className="productsListIconAvatar"
                            src={params.row.image}
                            alt={params.row.name}
                        />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: 'stock', headerName: 'Stock', width: 220 },
        { field: 'status', headerName: 'Status', width: 170 },
        { field: 'price', headerName: 'Price', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="iconContainer">
                        <Link to={`/products/${params.row.id}`}>
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
        <div className="productList">
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
