import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';
import {animate, motion}  from 'framer-motion';
import { Repeat } from '@mui/icons-material';


const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;
const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;
const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const iconAnimate=(duration)=>({
  initial:{y: -10},
  animate:{
    y:[10,-10],
    transition: {
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }

  }
});
function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <motion.div   
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5}}
>

        <Logo>Jayanth Reddy Gummitha</Logo>
        </motion.div>
        <motion.div 
          initial={{opacity:0,scale:0}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:1}}
  >

        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        </motion.div>
        <motion.div
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1.5}}
        >

        <SocialMediaIcons>
          <motion.div
          variants={iconAnimate(2.5)}
          initial="initial"
          animate="animate">

          <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
          </motion.div>
          <motion.div
          variants={iconAnimate(3)}
          initial="initial"
          animate="animate">

          <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
          </motion.div>
          <motion.div
          variants={iconAnimate(5)}
          initial="initial"
          animate="animate">

          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          </motion.div>
          <motion.div
          variants={iconAnimate(3)}
          initial="initial"
          animate="animate">

          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
          </motion.div>
        </SocialMediaIcons>
        </motion.div>

        <motion.div
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1.5}}>

        <Copyright>
          &copy; 2023 Jayanth Reddy Gummitha. All rights reserved.
        </Copyright>
        </motion.div>


      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;