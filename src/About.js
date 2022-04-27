import React from 'react';
import { Card } from 'react-bootstrap';

import RogerProfile from './imgs/Profilepicture.jpg'
import KyleProfile from './imgs/Profilepicture1.jpeg'

class Profile extends React.Component {

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Card           
          style={{
            width: '100%',
            height: '100%',
            padding: '20px',
            backgroundColor: 'beige',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <Card.Img style={{width: '50%', margin: 'auto'}} src={KyleProfile} alt='kyle' />
          <Card.Text>
            My name is Kyle Honaker, I’m a full-stack JavascriCard.Textt developer that makes interactive web applications. I come from a history of physical labor and dangerous jobs. It’s taught me what hard work and determination is. In transitioning to tech I’ve overcome the barriers keeping me out. The past few months I’ve made web apps that interact with 3rd party API’s, use server side routing, and utilize authentication. I’ve also made some great responsive front-ends with the use of native CSS and React. I’m looking to get into a leading tech company where I can build my skills with some of the best techies and advance my knowledge.
          </Card.Text>
        </Card>
        <Card           
          style={{
            width: '100%',
            height: '100%',
            padding: '20px',
            backgroundColor: 'beige',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <Card.Img style={{width: '50%', margin: 'auto'}} src={RogerProfile} alt='roger' />
          <Card.Text>
            Hi, my name is Roger Reyes.
            I am currently building my career as a software developer. Prior to this I was in the Army for 7 years as a satellite communications technician. In that field I worked on large scale operations that spanned the pacific region in Japan. Adaptability was the key trait in succeeding in that field as systems were constantly changing and evolving. This has led me to be much more flexible  in working in unexpected situations, which I am now using to propel myself into software development. I’ve always had a passion for learning the concepts of different languages, and it’s greatly helped my growth in learning both Java and React. I am currently looking to work for a tech company that can provide me with the tools to build myself and allow me to push them closer to accomplishing their mission.
          </Card.Text>
        </Card>

      </div>
    )
  }
};

export default Profile;
