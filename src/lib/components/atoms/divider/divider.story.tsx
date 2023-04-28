import { Meta, StoryFn } from "@storybook/react";
import { Divider } from "./divider";

// Config:
export default {
  title: "Atoms/Divider",
  component: Divider
} satisfies Meta<typeof Divider>;

// Template:
const Template: StoryFn<typeof  Divider> = args => <Divider {...args} />;

// Stories:
export const WithoutText = Template.bind({});
WithoutText.args = {};

export const TextMiddle = Template.bind({});
TextMiddle.args = {
  text: "Section",
  textPosition: "middle"
};

export const TextTopLeft = Template.bind({});
TextTopLeft.args = {
  text: "Section",
  textPosition: "top-left"
};