import { Meta, StoryFn } from "@storybook/react";
import { Select } from "./select";

// Config:
export default {
  title: "Atoms/Inputs/Select",
  component: Select,
  args: {
    options: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Orange", value: "orange" },
      { label: "Pineapple", value: "pineapple" },
      { label: "Strawberry", value: "strawberry" }
    ]
  }
} satisfies Meta<typeof Select>;

// Template:
const Template: StoryFn<typeof  Select> = args => <Select {...args} />;

// Stories:
export const Default = Template.bind({});
Default.args = {};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: "Select a fruit"
};