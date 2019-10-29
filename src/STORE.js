export default {
"children" : [
    {
        id: 1,
        name: "Child 1",
    },
    {
        id: 2,
        name: "Child 2",
    },
    {
        id: 3,
        name: "Child 3",
    },
],
"flyers": [
    {
        id: 1,
        title: "Corn Maze",
        image: "",
        eventdate: "10/15/19",
        actiondate: "10/10/19",
        action: "RSVP",
        category: "School",
        childid: [2]
    },
    {
        id: 2,
        title: "Field Trip",
        image: "",
        eventdate: "11/13/19",
        actiondate: "9/5/19",
        action: "Send Permission Slip",
        category: "School",
        childid: [1,2]
    },
    {
        id: 3,
        title: "Camping",
        image: "",
        eventdate: "9/3/19",
        actiondate: "8/20/19",
        action: "Pay",
        category: "Scouts",
        childid: [3]
    },
],
}
