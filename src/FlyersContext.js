import React from 'react';

const FlyersContext = React.createContext({
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
    onDeleteFlyer: () => {},
    onEditFlyer: () => {},
    onAddCategory: () => {},
    onAddChild: () => {},
    onAddUser: () => {},
})

export default FlyersContext;