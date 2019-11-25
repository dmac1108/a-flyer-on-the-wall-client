import React, {Component} from 'react';

const FlyersContext = React.createContext({
    flyers: [],
    children: [],
    flyers_children: [],
    categories: [],
    filterType: null,
    filterValue: 'all',
    childFilterValue: 'all',
    sortValue: 'eventdate',
    setFlyers: () => {},
    setChildren: () => {},
    setFlyersChildren: () =>{},
    setCategories: () =>{},
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
    onLoginSuccess: () =>{},
})

export default FlyersContext;

export class FlyersProvider extends Component {

    state = {
        flyers: [],
        children: [],
        flyers_children: [],
        categories: [],
        filterValue: 'all',
        childFilterValue: 'all',
        sortValue: 'actiondate',
      }


      setFlyers = (flyers) =>{
          console.log('in context', flyers)
        this.setState({
          flyers: flyers
        })
      }
  
      setChildren = (children) =>{
        this.setState({
          children: children
        })
      }
  
      setFlyersChildren = (flyers_children) =>{
        this.setState({
          flyers_children: flyers_children
        })
      }
  
      setCategories = (categories) =>{
        this.setState({
          categories: categories
        })
      }
    
    onLoginSuccess = ()=>{
      this.props.history.push('/flyers')
    } 
  
    onAddFlyer = (flyer, flyerChild, history) => {
      console.log('in the onAddFlyer function')
      this.setState({
        flyers: [...this.state.flyers,flyer],
        flyers_children: [...this.state.flyers_children, flyerChild]
      })
      history.push('/flyers')
    }
  
    // onAddFlyers_Children = (flyer_child) => {
      
    //   this.setState({
    //     flyers_children: [...this.state.flyers_children,flyer_child]
    //   })
    //   this.props.history.push('/flyers')
    // }
  
    onAddCategory = (newCategory) => {
      
      this.setState({
        categories: [...this.state.categories,{category: newCategory}]
      })
  
    }
  
    onAddUser = (newUser) =>{
      // this.setState({
      //   users: [...this.state.users,newUser]
      // })
    }
  
    onAddChild = (newChild) =>{
      const child = {
        name: newChild,
      }
      this.setState({
        children: [...this.state.children,child]
      })
    }
  
    onEditFlyer = (id,flyer, history) =>{
      flyer.id = id
      this.setState({
        flyers: [...this.state.flyers.filter((flyer)=>flyer.id !== id),flyer]
      })
      history.push('/flyers')
    }
  
    onDeleteFlyer = (flyerid) =>{
      this.setState({
        flyers: this.state.flyers.filter((flyer) => flyer.id !== flyerid)
      })
    }
  
    onFilterChange = (selectedValue) =>{
      this.setState({
        filterValue: selectedValue,
      })
    }
  
    onChildFilterChange = (selectedValue) =>{
      this.setState({
        childFilterValue: selectedValue,
      })
    }
  
    onSortChange = (sortValue) =>{
      
      this.setState({
       sortValue: sortValue
      })
    }
  
    render(){
        const contextValue = {
          flyers: this.state.flyers,
          children: this.state.children,
          flyers_children: this.state.flyers_children,
          categories: this.state.categories,
          filterValue: this.state.filterValue,
          childFilterValue: this.state.childFilterValue,
          sortValue: this.state.sortValue,
          setChildren: this.setChildren,
          setFlyers: this.setFlyers,
          setFlyersChildren: this.setFlyersChildren,
          setCategories: this.setCategories,
          onAddFlyer: this.onAddFlyer,
          onAddFlyers_Children: this.onAddFlyers_Children,
          onDeleteFlyer: this.onDeleteFlyer,
          onFilterChange: this.onFilterChange,
          onSortChange: this.onSortChange,
          onChildFilterChange: this.onChildFilterChange,
          onEditFlyer: this.onEditFlyer,
          onAddCategory: this.onAddCategory,
          onAddUser: this.onAddUser,
          onAddChild: this.onAddChild,
          onLoginSuccess: this.onLoginSuccess,
        }
        return(
            <FlyersContext.Provider value={contextValue}>
                {this.props.children}
            </FlyersContext.Provider>
        )
}}