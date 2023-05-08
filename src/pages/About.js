import image1 from '../images/Hawks_Game_Courside.jpg'
// IMPORT MUI STYLE
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";

function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {

    // make api call and get response
    const response = await fetch("./about.json");

    // turn response into javascript object
    const data = await response.json();

    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getAboutData() }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div class="max-h-96 md:h-screen">
         <img className="object-scale-down object-top" src="https://www.canva.com/design/DAFiWYvLDA8/view" alt=""></img> 
      </div>
      <div class="flex bg-gray-100 p-10">
        <div class="mb-auto mt-auto max-w-lg">
          <h1 class="text-3xl uppercase">Donald Hart</h1>
          <p class="font-semibold mb-5">Software Engineer</p>
          <p>"Hey! My name is Donald Hart and I'm a Software Engineer who prides himeslef on actice listening and effective communication. I attended Morehoue College and played D2 football for 5 years. After that, i attened Florida Coastal School of Law and developed my presentation, listening, and communication."</p>
          <button class="bg-black rounded-md py-3 px-7 mt-6 text-white">Email Me</button>
        </div>
      </div>
    </div>
  </div>
  
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
