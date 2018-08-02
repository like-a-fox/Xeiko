import React from 'react'
import { fstore } from '../firebase'
import withAuthorization from '../components/Session/withAuthorization'
import AuthUserContext from './Session/AuthUserContext';
import defaultPic from '../assets/images/picsq3.jpg'

        const BannerProfile = () =>
            <section id="banner" className="style2">
            <div className="inner">
            <div className="user-img">
            <img src={defaultPic} />
            </div>
            </div>
        </section>


    
   

export default BannerProfile