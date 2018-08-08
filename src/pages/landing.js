import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/newPhotos/newTwelveSQ.jpg'
import pic09 from '../assets/images/newPhotos/newOneSQ.jpg'
import pic10 from '../assets/images/newPhotos/newElevenSQ.jpg'

const Landing = (props) => (
    <div>
        <Helmet>
            <title>$kernel panic</title>
            <meta name="description" content="The Shadow Void" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Artictulation</h2>
                    </header>
                    <p>The English language needs a word for that feeling you get when you badly need help, but there is no one you can call because you're not popular enough to have friends, not rich enough to have employees, and not powerful enough to have lackeys. It is a very distinct cocktail of impotence, loneliness and a sudden stark assessment of your non-worth to society? Enturdment?</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Unimaginable</h3>
                            </header>
                            <p>You’re going to die. Someday, you will face that moment. Regardless of what you believe, at that moment either you will face complete nonexistence, which is something you can’t possibly imagine, or you will face something even stranger that you also can’t possibly imagine. On an actual day in the future, you will be in the unimaginable.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Apathy & Fate</h3>
                            </header>
                            <p>Scientists talk about dark matter, the invisible, mysterious substance that occupies the space between stars. Dark matter makes up 99.99 percent of the universe, and they don't know what it is. Well I do. It's apathy. That's the truth of it; pile together everything we know and care about in the universe and it will still be nothing more than a tiny speck in the middle of a vast black ocean of Who Gives a Fuck</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Time Delusion</h3>
                            </header>
                            <p>You see, time is an ocean, not a garden hose. Space is a puff of smoke, a wisp of cloud. Your mind is just floating through all the possibilities.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </div>
)

export default Landing