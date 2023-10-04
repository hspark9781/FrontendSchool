import React from 'react'

export default function ListItem({item}) {
    return (
        <tr>
            <th>name : {item.name}</th>
            <td>{item.price}₩</td>
        </tr>
    )
}
