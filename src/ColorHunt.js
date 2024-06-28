import React from 'react';
import "./Colors/colors.css";
import Context from "./context/Context";
import Color from './Colors/Color';
const ColorHunt = () => {
  const { blueColor } = React.useContext(Context);
  const { redColor } = React.useContext(Context);
  const { yellowColor } = React.useContext(Context);
  const { greenColor } = React.useContext(Context);
  const { greyColor } = React.useContext(Context);
  const { fancyColor } = React.useContext(Context);
  console.log(typeof blueColor);
  return (
    <div >
      <nav >
        <h1 className='main-heading'>Color-Picker</h1>
      </nav>
      <div>
        <Color colorName =  {blueColor} colorHeading="Blue" bgColor="#4834DF"/>
        <Color colorName =  {redColor} colorHeading="Red" bgColor="#EE4E4E"/>
        <Color colorName =  {yellowColor} colorHeading="Yellow" bgColor="#DFAF2B"/>
        <Color colorName =  {greenColor} colorHeading="Green" bgColor="green"/>
        <Color colorName =  {greyColor} colorHeading="Grey" bgColor="grey"/>
        <Color colorName =  {fancyColor} colorHeading="Fancy" bgColor="#3ABEF9"/>

      </div>
    </div>
  );
};

export default ColorHunt;