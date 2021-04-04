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
    <div>
      <p>
        Use your mouse to rotate the earth, and click on anything you see in orbit to learn more about it!
      </p>
    </div>
  )
}
