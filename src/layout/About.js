import React from 'react';
import Menu from '../components/NavBar/NavBar';
import { Button } from 'reactstrap';

const About = () => {
 return (
  <>
   <div className="banner">
    <Menu />
    <div className="introduce">
     <h2>Hello,I'm Quang</h2>
      <p> I have worked through 2 websites about jewelry websites and apps for ordering shoes online using java, I have cut freelancer online and participate in 2 projects at the company
      . The goal in the next 2 years is to become a full stack or a leader.Applying skills and exploration, knowledge to develop the company, long-term desire and become a full-time employee
      </p>
      <Button color="success">My CV PDF </Button>
    </div>
   </div>
  </>
 )
}

export default About
