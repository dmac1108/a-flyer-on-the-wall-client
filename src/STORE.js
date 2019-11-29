

export default {
"children" : [
    {
        id: 1,
        name: "Dick",
    },
    {
        id: 2,
        name: "Sally",
    },
    {
        id: 3,
        name: "Jane",
    },
],
"flyers": [
    {
        id: 1,
        title: "Corn Maze",
        location: "Best Corn Maze",
        image: require('../src/assets/Corn-Maze-Flyer.jpg'),
        eventdate: "10/15/19 15:30",
        eventenddate: "10/15/19 17:00",
        
        actiondate: "10/10/19",
        action: "RSVP",
        category: "School",
        childid: [2]
    },
    {
        id: 2,
        title: "Field Trip",
        location: "Washington D.C.",
        image: require('../src/assets/after-school-flyer.jpg'),
        eventstartdate: "11/13/19 13:00",
        eventenddate: "11/13/19 15:00",
        actiondate: "9/5/19",
        action: "Send Permission Slip",
        category: "School",
        childid: [1,2]
    },
    {
        id: 3,
        title: "Camping",
        location: "Camp Lost In the Woods",
        image: require('../src/assets/scoutcamping.jpg'),
        eventstartdate: "9/3/19 9:30",
        eventenddate: "9/4/19 10:30",
        actiondate: "8/20/19",
        action: "Pay",
        category: "Scouts",
        childid: [3]
    },
],
categories: ['scouts', 'school', 'gymnastics'],
users: [

],


}
