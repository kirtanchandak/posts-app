import React from "react";
import Bio from "./Bio";

export default {
  title: "Components/Bio",
  component: Bio,
};

const Template = () => (
  <Bio
    photo="https://pbs.twimg.com/profile_images/1556553372596989954/glVByCUu_400x400.jpg"
    name="Kirtan Chandak"
    tagline="I share what I do!"
    role="Content and Social Media Lead @GDSC GHRCEM"
  />
);

export const Default = Template.bind({});
