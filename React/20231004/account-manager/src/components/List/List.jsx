import React from 'react';
import ListItem from '../ListItem/ListItem';

export default function List({items}) {
    return (
        <table>
            <tbody>
                {items.map((item, index) => <ListItem item={item} key={index}/>)}
            </tbody>
        </table>
    )
}

