import React from 'react';

const Table = ({ columns, data }) => {

    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row)) }
            </tbody>
        </table>
    );
};