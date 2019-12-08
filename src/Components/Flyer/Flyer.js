import config from '../../config'
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FlyersContext from '../../FlyersContext'
import './Flyer.css';
import AddToCalendar from 'react-add-to-calendar';
import moment from 'moment';
import FlyerApiService from '../../services/flyer-api-service'
import piexif from 'piexifjs'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faEdit, faTrash, faCalendarPlus} from '@fortawesome/free-solid-svg-icons'

library.add(faEdit,faTrash, faCalendarPlus);

 class Flyer extends Component{

    constructor(props){
        super(props);
        this.canvasRef = React.createRef();
        this.resetImageRef = React.createRef();
    }

    static contextType = FlyersContext

    onDeleteFlyer = (flyerId) =>{
        FlyerApiService.deleteFlyer(flyerId)
        .then(()=>{
            this.context.onDeleteFlyer(flyerId)
        })
    }


    resetOrientation(srcBase64, srcOrientation, canvas, context) {
        
        var img = new Image();    
      
        img.onload = function() {
          var width = img.width,
              height = img.height,
              
              ctx = context;
      
          // set proper canvas dimensions before transform & export
          if (4 < srcOrientation && srcOrientation < 9) {
            canvas.width = height;
            canvas.height = width;
          } else {
            canvas.width = width;
            canvas.height = height;
          }
          
          // transform context before drawing image
          switch (srcOrientation) {
            case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
            case 3: ctx.transform(-1, 0, 0, -1, width, height); break;
            case 4: ctx.transform(1, 0, 0, -1, 0, height); break;
            case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
            case 6: ctx.transform(0, 1, -1, 0, height, 0); break;
            case 7: ctx.transform(0, -1, -1, 0, height, width); break;
            case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
            default: break;
          }
      
          // draw image
          ctx.drawImage(img, 0, 0);
        };
      
        img.src = srcBase64;
      };




    componentDidMount(){
        console.log(this.props)
        const image = this.props.image
        console.log(image)
        const imageType = this.props.image.substring(11,14)
        let srcOrientation
        
        if(imageType === 'jpe'){
        var exifObj = piexif.load(image)
        srcOrientation = exifObj["0th"][piexif.ImageIFD.Orientation]
        }else{
            srcOrientation = 1
        }

        const canvas = this.canvasRef.current
        const context = canvas.getContext('2d')
       

        this.resetOrientation(image,srcOrientation,canvas,context);

    }
    
    render(){
    const {id, title, location, image, eventstartdate, eventenddate, actiondate, action, category} = this.props
    const {flyers_children, children} = this.context  
    
    let flyer_children
    if(flyers_children !== null){
        flyer_children = flyers_children.filter((flyer_child)=>
        flyer_child.flyerid === id
    )
    }
    
    
    let childrenList;

    if(flyer_children !== null){
        const childrenToList = flyer_children.map((flyer_child) => children.find(child => child.id === flyer_child.childid))
        
        childrenList = childrenToList.map((flyerchild)=> <dd key={flyerchild.id}>{flyerchild.childname}</dd>)
        
    }
    
    const startTime = moment(eventstartdate).format();
    const endTime= moment(eventenddate).format()
    const description = `${config.API_ENDPOINT}/${id}`
    const event = {
            title: title,
            location: location,
            description: description,
            startTime: startTime,
            endTime: endTime,
        }
    
    
    
    return(
        <div className="flyer">
        <div className="flyer-buttons">
            <button><Link to={`/edit-flyer/${id}`}><FontAwesomeIcon icon="edit"/></Link></button>
            <button onClick={()=>this.onDeleteFlyer(id)}><FontAwesomeIcon icon="trash"/></button>
        </div>
        <h2>{title}</h2>
        <canvas ref={this.canvasRef}/>
        <dl>
            <div className="list-group">
                <dt>Location:</dt>
                <dd>{location}</dd>
            </div>
            <div className="list-group">
                <dt>Event Start</dt>
                <dd>{moment(eventstartdate).format('MMMM Do, h:mm a')}</dd>
               
            </div>
            <div className="list-group">
                <dt>Event End</dt>
                <dd>{moment(eventenddate).format('MMMM Do, h:mm a')}</dd>
                
            </div>
            <div className="list-group">
                <dt>Action Date:</dt>
                <dd>{new Date(actiondate).toString().substring(0,10)}</dd>
            </div>
            <div className="list-group">
                <dt>Action:</dt>
                <dd>{action}</dd>
            </div>
            <div className="list-group">
                <dt>Category:</dt>
                <dd>{category}</dd>
            </div >
            <div className="list-group">
                <dt>Children:</dt>
                {childrenList}
            </div>
           
        </dl>
        
            <AddToCalendar event={event} buttonClassOpen buttonLabel="Add to Calendar" buttonWrapperClass="add-to-calendar" dropdownClass="react-add-to-calendar__dropdown"
            rootClass="react-add-to-calendar"/>
        
           
        
     </div>
    )
    }
}

export default Flyer