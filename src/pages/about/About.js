
import React, { useState } from 'react';
import styled from 'styled-components';
import { jobs } from '../../data/jobs';
import { skills } from '../../data/skills';
import { age } from '../../utils/helper'
import { Filter, Job, Button } from '../../components'
import pdf from '../../docs/Rahul_Soni_Resume.pdf'

const Section = styled.section`
  margin: 2rem 0;
  @media print {
    border-bottom: 1pt solid #000;
    line-height: 1;
  }
`;

const Container = styled.div`
  width: 1140px;
  max-width: 94%;
  overflow-y:auto;
  margin: 0 auto;
`;

function About() {
  const [isShowMoreJobs, setIsShowMoreJobs] = useState(false)
  const [filter, setFilter] = useState('');

  const truncatedJobs = jobs.slice(0, 2);
  const displayJobs = isShowMoreJobs ? jobs : truncatedJobs;

  const skillCategories = Object.keys(skills);

  return (
    <>
      <Container>
        <Section>
          <Name data-testid="headline">Hey, I'm Rahul Soni</Name>
          <JobTitle>A Senior Mern Stack Developer from Vadodara, India</JobTitle>
          <Text>
            As a passionate developer i am specialized in iOS & Web application development, 
            having fluent knowledge in the iOS framework and developed many mobile applications 
            from various domains such as (Payment, IoT, Graphics, Social, Logistic) and also 
            developed cross-platform based mobile application using React-Native framework. 
            In terms of the Web framework having experience in both back-end and front-end 
            development, developed many full-stack based web application using Node.js, React.js & MongoDB.
          </Text>
          <Text>
            I am {age('1990-08-25')} years old and have been a developer for
            as long as I can think. The technologies I work with are JavaScript,
            HTML and CSS with a focus on the frameworks React.js, React Native,
            Swift, Node and Express. I use code not only to do my day-to-day
            job, but also to solve everyday problems I come across.
          </Text>
          <Text>
            When I am not writing code I love to spend time with my wife and{' '}
            {age('2014-09-14')} year old son at home or
            travelling to different places.
          </Text>
        </Section>
        <Section>
          <Title>Skills</Title>
          <ScreenOnly>
            <div data-testid="filters">
              Filter:
              {skillCategories.map((skill) => (
                <Filter
                  key={skill}
                  name={skill}
                  setFilter={setFilter}
                  currentFilter={filter}
                />
              ))}
            </div>
          </ScreenOnly>
          {skillCategories.map((category) => {
            const cat = skills[category];
            if (filter !== '' && filter !== category) return;
            return cat.map((ability, index) => (
              <Badge
                key={`${category}-${index + 1}`}
                className={`--${category}`}
              >
                {ability}
              </Badge>
            ));
          })}
          <Title>Soft skills</Title>
          {/* {softSkills.join(", ")} */}
          {[
            'Strong communication',
            'Leadership',
            'Problem solving',
            'Creative thinking',
            'Flexible and adaptive',
            'Team player',
            'Always on time',
          ].map((item, index) => (
            <Badge key={`softskill-${index + 1}`} className="--softskill">
              {item}
            </Badge>
          ))}
        </Section>
        <Section>
          <Title>Work Experience</Title>
          <Jobs id={`jobs-${isShowMoreJobs ? 'open' : 'closed'}`}>
            {displayJobs.map((job) => (
              <Job
                key={job.id}
                title={job.title}
                company={job.company}
                place={job.place}
                from={job.from}
                to={job.to}
              >
                <List>
                  {job.tasks.map((task, index) => (
                    <li key={`task-${index}`}>{task}</li>
                  ))}
                </List>
              </Job>
            ))}
          </Jobs>
          <ReadMore onClick={() => setIsShowMoreJobs(prevState => !prevState)}>
            {!isShowMoreJobs ? 'Show more' : 'Show less'}
          </ReadMore>
        </Section>
        <Section>
          <Centre>
            <Text>
              Recruiters, you can find my up-to-date CV as a PDF download by
              clicking the button below.
            </Text>
            <Button
              href={pdf}
              download="Rahul_Soni_Resume.pdf"
            >
              Download CV
            </Button>
          </Centre>
        </Section>
      </Container>
    </>
  )
}

export default About

const Name = styled.h1`
  font-size: 3rem;
  color: white;
  margin: 0;
  margin-top: 4rem;
  @media print {
    font-size: 22pt;
  }
`;
const JobTitle = styled.h2`
  font-size: 1.75rem;
  color: white;
  margin: 0;
  margin-top: 1rem;
  @media print {
    font-size: 16pt;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: white;
  @media print {
    margin-top: 5pt;
    font-size: 11pt;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-top: 15px;
  @media print {
    font-size: 22pt;
  }
`;

const Jobs = styled.div`
  @media print {
    column-count: 2;
  }
`;

const List = styled.ul`
  padding: 0 1rem;
  margin: 0;
  list-style: square;
`;

const ScreenOnly = styled.div`
  color: white;
  @media print {
    display: none;
  }
`;

const ReadMore = styled.button`
  background: transparent;
  border: none;
  display: block;
  margin: 0 auto;
  color: #d6deeb;
  @media print {
    display: none;
  }
`;

const Centre = styled.div`
  text-align: center;
  margin-bottom: 90px;
  @media screen and (max-width: 600px) {
    margin-bottom: 140px;
  }
  @media screen and (max-width: 992px) {
    margin-bottom: 140px;
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem 0.5rem;
  border-radius: 99px;
  background: #333;
  color: #fff;
  &.--technologies {
    background: #3e4153;
  }
  &.--frameworks {
    background: #1671cf;
  }
  &.--databases {
    background: #64cf16;
  }
  &.--cms {
    background: #e94e1b;
  }
  &.--design {
    background: #d03333;
  }
  @media print {
    background: transparent;
    color: #000;
    border: 1px solid #000;
  }
`;
