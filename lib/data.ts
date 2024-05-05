import React from "react";
import { FaPizzaSlice, FaReact } from "react-icons/fa";
import { GiNewBorn } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { TbMoustache } from "react-icons/tb";
import gaming from "@/public/gaming.png";
import sunbathing2 from "@/public/sunbathing2.png";
import bday from "@/public/bday.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Popi moved in",
    location: "Budapest, Hungary",
    description:
      "I, Popi, decided to finally abandon the shelter and move in with the best human beings.",
    icon: React.createElement(MdFamilyRestroom),
    date: "2018",
  },
  {
    title: "Rizsi became a city dawg",
    location: "Budaperst, Hungary",
    description:
      "I, Rizsi, graduated from the coutnryside, and moved to Budapest for a better life like many others in Hungary.",
    icon: React.createElement(GiNewBorn),
    date: "2019",
  },
  {
    title: "Frantic Firenze",
    location: "Firenze Italy",
    description:
      "We moved to Firenze, Italy, where we had the best time of our lives. Adventures by the sea, conquering Toscana, you name it!",
    icon: React.createElement(FaPizzaSlice),
    date: "2021 - 2022",
  },
  {
    title: "Berlin calling",
    location: "Berlin, Germany",
    description:
      "In Germany we couldn't escape the rules, had to get a driving license, and learned to be a good dog. Moving apartments was a bit scary, but we survived! Best of all, we didn't do anything!",
    icon: React.createElement(TbMoustache),
    date: "2022 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Playing with Toys",
    description:
      "We like to play. A lot! And then argue about it. We get jelaous of each other and we like it this way.",
    tags: ["Rope", "Bone", "Ball", "Branch", "Grass"],
    imageUrl: gaming,
  },
  {
    title: "Sunbathing",
    description:
      "Our favorite daytime activity, especially when the sun's out! We compete for the best sunny spots on the deck.",
    tags: ["Sunshine", "Lounging", "Vigilance", "Energy Recharge", "Deck"],
    imageUrl: sunbathing2,
  },
  {
    title: "Dinner Time",
    description:
      "The highlight of our day! We both have gourmet tastes and never miss a chance to critique the evening menu.",
    tags: ["Gourmet Tastes", "Hunger", "Greed", "Impatience", "Critique"],
    imageUrl: bday,
  },
] as const;

export const skillsData = [
  "Barking Communication",
  "Treat Detection",
  "Toy Retrieval",
  "Neighborhood Surveillance",
  "Cuddle Optimization",
  "Stair Racing",
  "Sofa Management",
  "Food Critiquing",
  "Ball Coordination",
  "Leash Tug-of-War",
  "Duck Observation",
  "Tail Wagging",
  "Parkour in Parks",
  "Belly Rub Requesting",
  "Snooze Button",
  "Cheese Tax Collection",
] as const;
