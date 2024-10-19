import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const ExperienceCard = ({ experience }) => {
    return (
    //     <VerticalTimelineElement
    //   icon={
    //     <img
    //       width="100%"
    //       height="100%"
    //       alt={experience?.company}
    //       style={{ borderRadius: "50%", objectFit: "cover" }}
    //       src={experience?.img}
    //     />
    //   }
    //   contentStyle={{
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "12px",
    //     background: "#1d1836",
    //     color: "#fff",
    //     boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
    //     backgroundColor: "rgba(17, 25, 40, 0.83)",
    //     border: "1px solid rgba(255, 255, 255, 0.125)",
    //     borderRadius: "6px",
    //   }}
    //   contentArrowStyle={{
    //     borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
    //   }}
    //   date={experience?.date}
    // >
    //   <Top>
    //     <Image src={experience?.img} />
    //     <Body>
    //       <Role>{experience?.role}</Role>
    //       <Company>{experience?.company}</Company>
    //       <Date>{experience?.date}</Date>
    //     </Body>
    //   </Top>
    //   <Description>
    //     {experience?.desc && <Span>{experience.desc}</Span>}
    //     {experience?.skills && (
    //       <>
    //         <br />
    //         <Skills>
    //           <b>Skills</b>
    //           <ItemWrapper>
    //             {experience?.skills?.map((skill, index) => (
    //               <Skill>• {skill}</Skill>
    //             ))}
    //           </ItemWrapper>
    //         </Skills>
    //       </>
    //     )}
    //   </Description>
    // </VerticalTimelineElement>
    
      <Card>
          {/* <Top>
              <Image src={experience.img} />
              <Body>
                  <Role>{experience.role}</Role>
                  <Company>{experience.company}</Company>
                  <Date>{experience.date}</Date>
              </Body>
          </Top> */}
          <Description>
              
              <p>As a recent master's degree in computer science graduate via Eastern Illinois University, I've   searching for employment as a Java Full Stack Developer in the software development sector. My academic background and project experience have given me a solid foundation in Java 8, Spring Boot, Microservices, MySQL, Hibernate, HTML, CSS, JavaScript, Bootstrap, and ReactJS.</p><br/>
               <p>Throughout my education, I have exhibited proficiency in designing and executing application systems that are designed to fit a variety of corporate demands and project objectives. I created strong solutions using advanced Java 8 technologies such as streams and lambda expressions. In addition, I used Spring framework concepts, followed the MVC design pattern, and used the Hibernate ORM framework for quick data persistence and querying.    My experience includes implementing Microservices using Spring Boot, where I created APIs and packed data into JSON for smooth delivery.  In every project I work on, I prioritize improving the user experience and satisfaction levels.</p><br/>
              <p> I thrive in places that encourage cooperation, innovation, and continual learning. I am excited to join a team that shares my drive for quality and growth. I am confident that my talents, expertise, and proactive approach will be beneficial to your organization's success.</p><br/>
              {/* {experience?.desc &&
                  <Span>{experience?.desc}</Span>

              } */}
              {experience?.skills &&
                  <>
                      <br />
                      <Skills>
                          <b>Skills:</b>
                          <ItemWrapper>
                              {experience?.skills?.map((skill, index) => (
                                  <Skill>• {skill}</Skill>
                              ))}
                          </ItemWrapper>
                      </Skills>
                  </>
              }
          </Description>
          {/* {experience.doc &&
              <a href={experience.doc} target="new">
                  <Document src={experience.doc} />
              </a>
          } */}
      </Card>
    )
}

export default ExperienceCard