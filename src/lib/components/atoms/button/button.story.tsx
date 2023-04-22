import { Meta, StoryFn } from "@storybook/react";
import { FiEdit, FiLayers, FiUsers } from "react-icons/fi";
import { Button } from "./button";

// Config:
export default {
  title: "Atoms/Button",
  component: Button,
  args: {
    variant: "primary"
  }
} satisfies Meta<typeof Button>;

// Template:
const Template: StoryFn<typeof  Button> = args => <Button {...args}>Click me</Button>;

// Stories:
export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  icon: <FiLayers />
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary"
};

export const SecondaryIcon = Template.bind({});
SecondaryIcon.args = {
  variant: "secondary",
  icon: <FiUsers />
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger"
};

export const DangerIcon = Template.bind({});
DangerIcon.args = {
  variant: "danger",
  icon: <FiEdit />
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  size: "small"
};

export const SizeFullWidth = Template.bind({});
SizeFullWidth.args = {
  size: "full-width"
};