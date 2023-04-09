import { Meta, StoryFn } from "@storybook/react";
import { Avatar } from "./avatar";

// Config:
export default {
  title: "Atoms/Avatar",
  component: Avatar,
  args: {
    name: "Bluzzi"
  }
} satisfies Meta<typeof Avatar>;

// Template:
const Template: StoryFn<typeof Avatar> = args => <Avatar {...args} />;

// Stories:
export const DefaultColor = Template.bind({});
DefaultColor.args = {};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: "#047857"
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: "5rem",
  color: "#7e22ce",
  name: "Unarray"
};