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
    onDeleteFlyers_Children: () => {},
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
    
      this.setState({
        flyers: [...this.state.flyers,flyer],
        flyers_children: [...this.state.flyers_children, flyerChild]
      })
      history.push('/flyers')
    }
  
    onAddCategory = (newCategory) => {
      
      this.setState({
        categories: [...this.state.categories,newCategory]
      })
  
    }
  
    onAddChild = (newChild) =>{
      
      
      this.setState({
        children: [...this.state.children,newChild]
      })
    }
  
    onEditFlyer = (id,flyer, flyerChildrenToDelete, flyerChild, history) =>{
      console.log('in oneditflyer', history)
      if(flyerChildrenToDelete){
      const contextDeletions = flyerChildrenToDelete.map((flyerChild)=>
        this.onDeleteFlyers_Children(flyerChild.id)
      )
      Promise.all(contextDeletions)
      .then(()=>{
       
        flyer.id = id
        this.setState({
          flyers: [...this.state.flyers.filter((flyer)=>flyer.id != id),flyer],
          flyers_children: [...this.state.flyers_children, flyerChild]
        })
        history.push('/flyers')
      })
    } else {
      flyer.id = id
        this.setState({
          flyers: [...this.state.flyers.filter((flyer)=>flyer.id != id),flyer],
          flyers_children: [...this.state.flyers_children, flyerChild]
        })
        history.push('/flyers')
    }
    }
  
    onDeleteFlyer = (flyerid) =>{
      
      this.setState({
        flyers: this.state.flyers.filter((flyer) => flyer.id !== flyerid)
      })
    }

    onDeleteFlyers_Children = (flyerChildId) =>{
      
      return new Promise((resolve, reject) =>{
        resolve(this.setState({
          
        flyers_children: this.state.flyers_children.filter((child) => child.id !== flyerChildId)
      
        }))
        
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
          onDeleteFlyers_Children: this.onDeleteFlyers_Children,
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