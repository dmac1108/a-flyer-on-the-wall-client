import React from 'react';

const FlyersContext = React.createContext({
    flyers: [],
    filterValue: null,
    sortValue: 'eventdate',
    onAddFlyer: () => {},
    onDeleteFlyer: () => {},
})

export default FlyersContext