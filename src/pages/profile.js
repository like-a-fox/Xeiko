import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import withAuthorization from '../components/Session/withAuthorization'
import BannerProfile from '../components/BannerProfile';


const Profile = (props) => (
    <div>
        <Helmet>
            <title>$master --slave</title>
            <meta name="description" content="--slave profile" />
        </Helmet>
        <BannerProfile />

        <div id="main">
            
    </div>
    </div>
)

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Profile);