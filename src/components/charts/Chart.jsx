/* eslint-disable no-unused-vars */
import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';

function Chart({ title, data, dataKey, grid }) {
    return (
        <ChartContainer>
            <ChartTitle>{title}</ChartTitle>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#3c096c" />
                    <Line type="monotone" dataKey={dataKey} stroke="#3c096c" />
                    <Tooltip />
                    {grid && (
                        <CartesianGrid stroke="#6c757d" strokeDasharray="5 5" />
                    )}
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    );
}

export default Chart;

const ChartContainer = styled.div`
    padding: 20px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.5);
`;
const ChartTitle = styled.h3`
    margin-bottom: 10px;
`;
