import React, { Component } from 'react';
import './responsive.css'
import DHF2 from '../img/DHF2.png'
import Trading2 from '../img/Trading2.png'
import TravelBetter2 from '../img/TravelBetter2.png'
import EduLearn from '../img/EduLearn.png'
import Kezzthechef from '../img/Kezzthechef.png'
import chatme from '../img/chatme (2).png'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion'

class Work_page extends Component {
    state = {  clicked : false };
    
    handleClick = () => {
       this.setState({clicked: !this.state.clicked})
    }

  render () {
  return (
    <m.div 
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1, ease: "easeOut" }}
    className='workTwo'>
      <div className='work_page'>
        <h1>My Works</h1>
        <p>Some of my projects</p>
        <h2>Web Applications</h2>
        <div className='workProject'>
              <div className='workImg'>
                 <div className='work2-bg res-br'></div>
                  <img src={DHF2} className='dhf2' />
              </div>
              <div className='workImg'>
                  <div className='work2-bg res-br'></div>
                  <img src={Trading2} className='trading2' />
              </div>
              <div className='workImg'>
                  <div className='work2-bg res-br'></div>
                  <img src={TravelBetter2} className='travelbetter2' />
              </div>
              <div className='workImg'>
                  <div className='work2-bg res-br'></div>
                  <img src={EduLearn} className='edulearn' />
              </div>
              <div className='workImg'>
                 <div className='work2-bg res-br'></div>
                  <img src={Kezzthechef} className='kezz' />
              </div>
              <div className='workImg'>
                <div className='work2-bg res-br'></div>
                <img src={chatme} classname='chatme'/>
              </div>
        </div>
       <Link to='/Resume' className='workA'><h3 className='wor'>Lets Go To My Resume <FaLongArrowAltRight className='arrow3' /></h3></Link>
    </div>
    </m.div>
  )
}
}

export default Work_page