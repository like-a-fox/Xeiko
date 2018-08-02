import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import withAuthorization from '../components/Session/withAuthorization'
import BannerProfile from '../components/Profile/BannerProfile';
import NameAndShortBio from '../components/Profile/NameAndShortBio';
import { db } from '../firebase';
import post1 from '../assets/images/posts/post1.jpg'
import post2 from '../assets/images/posts/post2.jpg'
import post3 from '../assets/images/posts/post3.jpg'
import post4 from '../assets/images/posts/post4.jpg'
import post5 from '../assets/images/posts/post5.jpg'
import post6 from '../assets/images/posts/post6.jpg'

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        return(
            <div>
                <Helmet>
                    <title>$master --slave</title>
                    <meta name="description" content="--slave profile" />
                </Helmet>
                <BannerProfile />
        
                <div id="main">
                            <NameAndShortBio  />
                            <section id="bottom" className="tiles">
                                <article style={{backgroundImage: `url(${post1})`}} >
                                    <header className="major">
                                        <h3>Aurora With Zero</h3>
                                        <p>Aurora looks an awful lot like her plushie pal Zero</p>
                                    </header>
                                </article>
                                <article style={{backgroundImage: `url(${post2})`}}>
                                    <header className="major">
                                        <h3>Her Chair</h3>
                                        <p>This is Aurora's chair, you can tell because they match</p>
                                    </header>
                                </article>
                                <article style={{backgroundImage: `url(${post3})`}} >
                                    <header className="major">
                                        <h3>Sleepy Pupper</h3>
                                        <p>She's all cuddled up next to me while i play games</p>
                                    </header>
                                </article>
                                <article style={{backgroundImage: `url(${post4})`}} >
                                    <header className="major">
                                        <h3>Doughnut</h3>
                                        <p>Is she a doggo or a doughnut? i can't tell</p>
                                    </header>
                                </article>
                                <article style={{backgroundImage: `url(${post5})`}} >
                                    <header className="major">
                                        <h3>License</h3>
                                        <p>a dog license doesn't mean you can drive Aurora!</p>
                                    </header>
                                </article>
                                <article style={{backgroundImage: `url(${post6})`}} >
                                    <header className="major">
                                        <h3>Pose</h3>
                                        <p>Aurora is so regal. Much wow!</p>
                                    </header>
                                </article>
                            </section>
            </div>
            </div>
        )
    }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Profile);

