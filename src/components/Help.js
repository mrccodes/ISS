import React from 'react';
import '../css/Help.css';

export const Help = (props) => {

  const onHelpClick = () => {
    props.setRenderInfo(helpUtils)
  };

  const helpUtils = {
    name: "Welcome to Whats Around Me!",
    components: [<HelpInfo />]
  }

  return (
    <div onClick={onHelpClick} className="help"><i className="fas fa-info-circle fa-lg"></i></div>
  )
};

const HelpInfo = () => {

  return (
    <div className="help-info">
        <p>
          Use your mouse to rotate the earth, and click on a satellite to learn more about it!
        </p>
        <p>This site is made in hopes that it will spark the passion of discovery and learning in someone. I have always been fascinated by outer space and the small steps we have taken to try and explore it's endless possibilites. </p>
        <p>If you are a teacher and would like to use this as a different way to get students interested in science <em>please</em> email me at <a href="mailto: mrc@mattcarlos.dev?subject=What%27s%20Around%20Us">mrc@mattcarlos.dev</a>, I would love to do whatever I can to include more of your curriculum.</p>
        <p>If you have any suggestions on anything to add, or would like to contribute to this project in any way, also please send me an email!</p>
        <p>Thank you!</p>
    </div>

  )

}
