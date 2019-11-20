import React from 'react';

const FlyersContext = React.createContext({
    users: [],
    flyers: [],
    children: [],
    flyers_children: [],
    categories: [],
    filterType: null,
    filterValue: 'all',
    childFilterValue: 'all',
    sortValue: 'eventdate',
    onFilterChange: () => {},
    onChildFilterChange: () => {},
    onSortChange: () => {},
    onAddFlyer: () => {},
    onAddFlyers_Children: () => {},
    onDeleteFlyer: () => {},
    onEditFlyer: () => {},
    onAddCategory: () => {},
    onAddChild: () => {},
    onAddUser: () => {},
})

export default FlyersContext;