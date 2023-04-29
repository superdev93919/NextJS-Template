import { Meta, StoryFn } from "@storybook/react";
import { FiLock, FiMail } from "react-icons/fi";
import { Input } from "./input";

// Config:
export default {
  title: "Atoms/Inputs/Input",
  component: Input,
  argTypes: {
    icon: { control: false }
  }
} satisfies Meta<typeof Input>;

// Template:
const Template: StoryFn<typeof  Input> = args => <Input {...args} />;

// Stories:
export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter your text here..."
};

export const Small = Template.bind({});
Small.args = {
  placeholder: "Enter your text here...",
  size: "small"
};

export const Email = Template.bind({});
Email.args = {
  type: "email",
  placeholder: "Your email address...",
  icon: <FiMail />
};

export const PasswordSmall = Template.bind({});
PasswordSmall.args = {
  type: "password",
  placeholder: "Your password...",
  size: "small",
  icon: <FiLock />
};