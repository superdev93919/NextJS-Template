import { Meta, StoryFn } from "@storybook/react";
import { TextArea } from "./text-area";

// Config:
export default {
  title: "Atoms/Inputs/TextArea",
  component: TextArea,
  args: {
    placeholder: "Enter your text here..."
  }
} satisfies Meta<typeof TextArea>;

// Template:
const Template: StoryFn<typeof  TextArea> = args => <TextArea {...args} />;

// Stories:
export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  size: "small"
};