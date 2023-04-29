import { Meta, StoryFn } from "@storybook/react";
import { Input } from "#/lib/components/atoms/input";
import { Label } from "./label";
import { Select } from "../select";

// Config:
export default {
  title: "Atoms/Inputs/Label",
  component: Label,
  args: {
    title: "Enter your text here",
    children: <Input placeholder="Lorem ipsum..." />
  }
} satisfies Meta<typeof Label>;

// Template:
const Template: StoryFn<typeof  Label> = args => (
  <Label {...args} />
);

// Stories:
export const Default = Template.bind({});
Default.args = {
  asterisk: false
};

export const WithAsterisk = Template.bind({});
WithAsterisk.args = {
  asterisk: true
};

export const DescriptionText = Template.bind({});
DescriptionText.args = {
  title: "Credit card information",
  description: "Please enter your credit card information, we need some money",
  asterisk: true
};

export const ErrorText = Template.bind({});
ErrorText.args = {
  title: "Credit card information",
  description: "Please enter your credit card information, we need some money",
  error: "Please enter a valid credit card number",
  asterisk: true
};

export const WithSelect = Template.bind({});
WithSelect.args = {
  title: "Select a fruit",
  asterisk: true,
  children: (
    <Select
      options={[
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Orange", value: "orange" }
      ]}
    />
  )
};