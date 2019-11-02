import React from 'react';

const FlyersContext = React.createContext({
    flyers: [],
    childrend: [],
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
})

export default FlyersContext;