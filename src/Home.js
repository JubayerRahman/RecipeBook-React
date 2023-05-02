import React from 'react';
import './App.css';
import FoodCard from './Components/FoodCard/FoodCard';
import Intro from './Components/Intro/Intro';
import burgerImg from "./images/burger.jpg"
import butterChickenImg from "./images/butterChicken.jpg"
import cakeImg from "./images/cake.jpg"
import chickenBiryaniImg from "./images/ChickenBiryani.jpg"
import chickenCurryImg from "./images/chickenCurry.jpg"
import eggSandwitchImg from "./images/eggSandwitch.jpg"
import IceCofeeImg from "./images/iceCofee.jpg"
import KabsaImg from  "./images/Kabsa.jpg"
import khichdiImg from "./images/khichdi.jpg"
import lasaniaImg from "./images/lasania.jpg"

const Home =()=>{
    const foods =[
        {name:"Burger", img:burgerImg , data: "I am a ball"},
        {name:"Butter Chicken", img: butterChickenImg},
        {name:"Cake", img: cakeImg},
        {name:"Chicken Biryani", img: chickenBiryaniImg},
        {name:"chicken Curry", img: chickenCurryImg},
        {name:"Egg Sandwitch", img: eggSandwitchImg},
        {name:"Ice Cofee", img: IceCofeeImg},
        {name:"Kabsa", img: KabsaImg},
        {name:"khichdi", img: khichdiImg},
        {name:"lasania", img: lasaniaImg},
      ]

      return(
        <header className="App-header">
        <Intro/>
        {foods.map((food)=>{
          return(
            <FoodCard name={food.name} img={food.img}/>
          )
        })}
      </header>
      )
}
export default Home;