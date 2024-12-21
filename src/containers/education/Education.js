import React, { useContext } from 'react';
import './Education.scss';
import EducationCard from '../../components/educationCard/EducationCard';
import { educationInfo } from '../../portfolio';
import StyleContext from '../../contexts/StyleContext';
import Fade from 'react-reveal/Fade';

export default function Education() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className="main" id="education">
      <div className="education-main-div">
        <Fade bottom duration={1000} distance="40px">
          <div className="education-heading">
            <h1 className={isDark ? 'dark-mode heading' : 'heading'}>
              {educationInfo.title}
            </h1>
            <p className={isDark ? 'dark-mode subTitle' : 'subTitle'}>
              {educationInfo.subtitle}
            </p>
          </div>
        </Fade>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    </div>
  );
}
