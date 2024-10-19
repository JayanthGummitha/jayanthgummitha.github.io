import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import favicon from '../../images/favicon.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import '../../App.css'
import { motion, MotionContext } from 'framer-motion'
import { Height } from '@mui/icons-material';
import { width } from '@mui/system';
import { Tilt } from "react-tilt";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StyledStarsCanvas from '../canvas/Stars';


const HeroSection = () => {
    return (
        <div id="about">

           
     
            <HeroContainer  >
                <HeroBg>
                    <StyledStarsCanvas/>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>
                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0 }}
                            >Hi, I am
                                <br />  {Bio.name}
                            </motion.p>

                        </Title>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            >

                            <TextLoop>
                                I am a
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Span>

                            </TextLoop>
                        </motion.div>

                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}>

                            <SubTitle>{Bio.description}</SubTitle>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.5 }}>
                            <div style={{ display: "flex", gap: "10px" }} >
                                <ResumeButton href={Bio.resume} target='display' >Check Resume</ResumeButton>
                            </div>
                        </motion.div>

                    </HeroLeftContainer>


                    <HeroRightContainer id="Right"  >
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5,  }}
                            style={{}}
                        >
                            <Tilt>

                            <Img src={favicon} alt="hero-image" style={{width:"400px"}}  />
                            </Tilt>
                        </motion.div>
                    </HeroRightContainer>

                </HeroInnerContainer>

            </HeroContainer>
        </div >
    )
}

export default HeroSection;