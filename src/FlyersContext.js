import React from 'react';

const FlyersContext = React.createContext({
    flyers: [],
    filterType: null,
    filterValue: null,
    sortValue: 'eventdate',
    onFilterChange: () => {},
    onSortChange: () => {},
    onAddFlyer: () => {},
    onDeleteFlyer: () => {},
})

export default FlyersContext