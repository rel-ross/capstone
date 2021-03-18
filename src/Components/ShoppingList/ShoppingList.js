import React from 'react'
import { Paper } from '@material-ui/core';

export default function ShoppingList() {
    return (
        <div> 
            <Paper style={{
                padding: 10,
                marginBottom: 10
            
            }}>
                <h2>Shopping List</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 3</li>
                </ul>
            </Paper>
        </div>
    )
}
