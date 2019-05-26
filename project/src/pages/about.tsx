import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | David Lindahl Photography" desc="David Lindahl is a multi-disciplined photographer living and loving life in the PNW. His images capture the beautiful landscapes of the area as well as the people. His travels have taken him to various National Parks." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm David Lindahl!</h1>
        <p>
          I am a photographer based in Seattle — but I'll take any opportunity to travel!

When I'm not taking photos, you'll find me building cool digital things, exploring the interwebs, adventuring in nature or spending time with my friends.
        </p>
        <p>
          I am a photographer based in Seattle — but I'll take any opportunity to travel!

When I'm not taking photos, you'll find me building cool digital things, exploring the interwebs, adventuring in nature or spending time with my friends.
        </p>
        <p>
         Grounded in a photo-journalistic background I have a passion to capture and tell your story in a realistic yet artistic manner. 

I have depths of experience shooting everything from fast moving sports to unmoving rocks and trees. 
        </p>
        <p>
          Want some fine pictures of people or your products? Looking to collaborate on an upcoming project? 

Get in touch with me using my contact form for more info including scheduling shoots. 
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
