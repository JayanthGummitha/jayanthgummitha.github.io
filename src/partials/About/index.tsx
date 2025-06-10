import style from './index.module.css'

// Components
import Section from 'components/Section'
import Container, { Row } from 'components/Container'
import ContentBlock from 'components/ContentBlock'
import ImageTrigger from 'components/ImageTrigger'
import Square from 'components/Square'
import Heading from 'components/Heading'
import { List, ListItem } from 'components/List'

// Hooks
import { Trans, useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation('translation', { keyPrefix: 'about' })
  const intro: string[] = t('intro', { returnObjects: true })
  const clanTitle: string = t('clan_title')
  const clan: string[] = t('clan', { returnObjects: true })
  const methodTitle: string = t('method_title')
  const method: string[] = t('method', { returnObjects: true })

  return (
    <Section name="about" className={style.root}>
      <Container grid>
        <Row start={3} end={1}>
          <div className={style.section}>
            <ContentBlock key={intro[0]}>
              {/* <div>
                <Trans
                  i18nKey={`about.intro.0`}
                  components={{
                    ImageVenice: <ImageTrigger name="venice" />,
                    ImageSketchin: <ImageTrigger name="sketchin" />,
                    ImageTCMGTK: <ImageTrigger name="tcmgtk" sizes={[2, 3]} />
                  }}
                />
              </div> */}
              <div>I was born in <em className="ImageTrigger-root_rOwOJ">Huzurnagar,India</em> in December 2000,
               today I live in United States and working  at <em className="ImageTrigger-root_rOwOJ">Self-Projects</em>, 
               an advanced-Full Stack Java Developer, as Creative Software Developer.</div>
            
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={2}>
          <Heading key={intro[1]}>
            
            <Trans
              i18nKey="
            My first version of
            <br/> jayanthgummitha.github.io
            "
              components={{
                Square: <Square />,
                pre: <pre />
              }}
            />
           </Heading>
          
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={1}>
          <ContentBlock key={intro[1]}>
            {/* {intro.slice(2).map((txt, i) => (
              <div key={i}>
                <Trans
                  i18nKey={`about.intro.${i + 2}`}
                  components={{
                    ImageVenice: <ImageTrigger name="venice" />,
                    ImageSketchin: <ImageTrigger name="sketchin" />,
                    ImageTCMGTK: <ImageTrigger name="tcmgtk" sizes={[2, 3]} />
                  }}
                />
              </div>
            ))} */}
            <div className=""><div>
              The first version, in 2023, was the first to have the basic-level domain <em className="ImageTrigger-root_rOwOJ">jayanthgummitha.github.io</em></div><div>Since then I have been designing and implementing virtual experiences. I have studied different programming languages and databases to cover the whole Technology stacks.</div><div>Today I think in Java with Aws.</div></div>
          </ContentBlock>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={2} end={2}>
          <div className={style.section}>
            <Heading alignRight key={clanTitle[0]}>
              <>
                Saas
              </>
            </Heading>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={2}>
          <div className={style.columns}>
            <ContentBlock key={clan[0]}>
              {clan.slice(0, 1).map((txt, i) => (
                <div key={i} className='text-white'>
                 It is the name of Collabration Project Management. 
                 Building Saas product was a passion for my career to land as<em className="ImageTrigger-root_rOwOJ"> Software Engineer</em> in IT Companies.<br/>
              At that time (it was the early 2023) I began to learn Software Skills and passion for my work, practicing building the first <em className="ImageTrigger-root_rOwOJ">Collabration project management </em> website.
            
                </div>
              ))}
              {/* <div className="ContentBlock-base_OM371"><div>It is the name of a clan of players of which I was the co-founder. 
              A community whose main interest was a passion for <em className="ImageTrigger-root_rOwOJ">Starcraft: Brood War</em>.
              At that time (it was the early 2000s) I began to combine fun for this game and passion for my work, practicing building the first <em className="ImageTrigger-root_rOwOJ">Numbers One</em> website.
             */}
            </ContentBlock>
            <ContentBlock >
              {clan.slice(0,1).map((txt, i) => (
                <div key={i}>
                  
                  Later 6 months, I developed a modern <em className="ImageTrigger-root_rOwOJ">Online Food Order Website </em> featuring user login, order placement, dashboards, order history, and custom restaurant/customer registration. <br/> I designed the UX in Figma, built the frontend using React, HTML, CSS, and JavaScript, and developed the backend with Spring Boot (Java) and MySQL. 
                <br/> I continue to grow through constant learning, experimentation, and sharing.
 
                </div>
              ))}
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={3}>
          <div className={style.section}>
            <Heading key={methodTitle}>
              <Trans i18nKey="about.method_title" components={{ pre: <pre /> }} />
            </Heading>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={1}>
          <ContentBlock key={method[0]}>
            <div>
              <Trans i18nKey={`about.method.0`} />
            </div>
          </ContentBlock>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={3}>
          <div className={style.section}>
            <Heading key={method[1]}>
              <Trans i18nKey="about.method.1" />
            </Heading>
            <Heading alignRight key={method[2]}>
              <Trans i18nKey="about.method.2" />
            </Heading>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={1}>
          <div className={style.section}>
            <ContentBlock key={method[3]}>
              <div>
                <Trans i18nKey={`about.method.3`} />
              </div>
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={3}>
          <ContentBlock>
            <List>
              <ListItem end="x8">Backend programming</ListItem>
              <ListItem end="x7">UI/UX Design</ListItem>
              <ListItem end="x8">Database Optimization</ListItem>
              <ListItem end="x5">Cloud interaction</ListItem>
              <ListItem end="x8">Tools Management / New Technologies</ListItem>
            </List>
          </ContentBlock>
        </Row>
      </Container>
    </Section>
  )
}
export default About
