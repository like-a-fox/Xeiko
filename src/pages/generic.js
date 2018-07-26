import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic10 from '../assets/images/pic10.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>Hollow & Empty</title>
            <meta name="description" content="Hollow & Empty" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Hollow Empty Creature</h1>
                    </header>
                    <span className="image main"><img src={pic10} alt="" /></span>
                    <p>There are two types of people on planet Earth, Batman and Iron Man. Batman has a secret identity, right? So Bruce Wayne has to walk around every second of every day knowing that if somebody finds out his secret, his family is dead, his friends are dead, everyone he loves gets tortured to death by costumed supervillains. And he has to live with the weight of that secret every day. But not Tony Stark, he's open about who he is. He tells the world he's Iron Man, he doesn't give a shit. He doesn't have that shadow hanging over him, he doesn't have to spend energy building up those walls of lies around himself. You're one or the other - either you're one of those people who has to hide your real self because it would ruin you if it came out, because of your secret fetishes or addictions or crimes, or you're not one of those people. And the two groups aren't even living in the same universe</p>
                    <p>You take risks; you get hurt. You put your head down and plow forward anyway and if you die, you die. That’s the game. You walk away, you’re choosing to walk away. Whatever bad things happen as a result, you’re choosing to let them happen. You can lie to yourself, say that you never had a choice, that you weren’t cut out for this. But deep down you’ll know. You’ll know that humans aren’t cut out for anything. We cut ourselves out. Slowly, like a rusty knife. Because otherwise, here’s what’s going to happen: you’re going to die and you’re going to stand at the gates of judgement and you’re going to ask God what was the meaning of it all, and God will say, ‘I created the universe, you little shit. It was up to you to give it meaning.</p>
                    <p>So are you going to eye fuck the board or you going to play?
Don’t answer that everybody plays.
Do you believe in coincidence?
I think it’s a crock of shit.
Fate is just the church going man’s way of avoiding responsibility.
I mean who wants to admit when they fuck up anyways
Snakes believe in coincidence.
Liars, cowards, cheats.
People who make their livings dancing around reality, like some kind of peelers or tribesmen primitive, weak, naïve.
Do you believe in hope?
Or do you believe what is just is?
You kill or die, you spit or swallow, you eat or you starve.
You got to dig your hands into mother earth and whisper your ambitions to the dirt.
Or you can take a nap in it.
Don’t waste time. Never waste time.</p>
                </div>
            </section>
        </div>

    </div>
)

export default Generic