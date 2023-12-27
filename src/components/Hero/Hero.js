import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I'm <br />
          Devanshu Kejriwal
        </SectionTitle>
        <SectionText style={{paddingBottom:0}}>
        FrontEnd developer with some of designing skills. Experience in React.js , Next.js , MongoDB , RTL ,Tailwind CSS.
        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;