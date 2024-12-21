import React, { useState, createRef, useContext } from 'react';
import { Fade, Slide } from 'react-reveal';
import ColorThief from 'colorthief';
import './EducationCard.scss';
import StyleContext from '../../contexts/StyleContext';

export default function EducationCard({ school }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();
  const { isDark } = useContext(StyleContext);

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === 'undefined'
      ? null
      : 'rgb(' + values.join(', ') + ')';
  }

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? 'subTitle dark-mode-text' : 'subTitle'}
          >
            {item}
          </li>
        ))
      : null;
  };

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
    
  return (
    <div>
      <Fade left duration={1000}>
        <div className={isDark ? 'education-card-dark' : 'education-card'}>
          <div
            style={{ background: rgb(colorArrays) }}
            className="education-banner"
          >
            <div className="education-blurred_div"></div>
            <div className="education-banner-content">
              {school.logo && (
                <img
                  crossOrigin={'anonymous'}
                  ref={imgRef}
                  className="education-roundedimg"
                  src={school.logo}
                  alt={school.schoolName}
                  onLoad={() => getColorArrays()}
                />
              )}
              <h5 className="education-text-school">{school.schoolName}</h5>
            </div>
          </div>
          
          <div className="education-text-details">
            <h5
              className={
                isDark
                  ? 'education-text-subHeader dark-mode-text'
                  : 'education-text-subHeader'
              }
            >
              {school.subHeader}
            </h5>
            <h5
              className={
                isDark
                  ? 'education-text-duration dark-mode-text'
                  : 'education-text-duration'
              }
            >
              {school.duration}
            </h5>
            <p
              className={
                isDark
                  ? 'subTitle education-text-desc dark-mode-text'
                  : 'subTitle education-text-desc'
              }
            >
              {school.desc}
            </p>
            <ul>
              <GetDescBullets descBullets={school.descBullets} />
            </ul>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
