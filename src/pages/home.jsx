import React, {Component} from 'react';
import './home.css';
import Navbar from '../Components/Navbar.jsx';
import Jumbotron from '../Components/Jumbotron.jsx';


class home extends Component{
    render(){
        return(
            
           <div className='home'>
               <Navbar/>
               <Jumbotron/>
              <div>
                  <h1>
                     
                  </h1>
            <div className='home'>
           
   
    <div className="row">
      <div className="col-md-4">
      <img src={require('../images/Frank.png')} className='display-2'/>
      </div>
      <div className="col-md-4">
      <img src={require('../images/BigRig.png')} className='display-2'/>
      </div>
      <div className="col-md-4">
      <img src={require('../images/OilRig.png')} className='display-2'/>
      </div>
    </div>

    

  </div>
  <img src={require('../images/Banner.png')} className='display-4'/>
                <p>
                <div className="row">
      <div className="col-md-4">
      <img src={require('../images/TankPricing.png')} className='display-2'/>
      </div>
      <div className="col-md-4">
      <img src={require('../images/TruckWashing.png')} className='display-2'/>
      </div>
      <div className="col-md-4">
      <img src={require('../images/OilRigPricing.png')} className='display-2'/>
      </div>
    </div>
                   
                    </p>
                    </div>
                </div>
          

        );
    }
}

export default home;

