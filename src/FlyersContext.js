import React from 'react';

const FlyersContext = React.createContext({
    flyers: [],
    childrend: [],
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
})

export default FlyersContext;