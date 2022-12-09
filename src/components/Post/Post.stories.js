import React from "react";
import Post from "./Post";

export default {
  title: "Components/Post",
  component: Post,
};

const Template = () => (
  <Post
    content="I'm working in Figma, for the first time as a designer."
    date="9-12-2022"
  />
);

export const Default = Template.bind({});
