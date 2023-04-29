import { Meta, StoryFn } from "@storybook/react";
import { Text } from "./text";

// Config:
export default {
  title: "Atoms/Text",
  component: Text,
  args: {
    color: "black",
    type: "p",
    size: "base"
  }
} satisfies Meta<typeof Text>;

// Template:
const Template: StoryFn<typeof  Text> = args => (
  <Text {...args}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Aut minus at, ut saepe dignissimos provident esse ipsum, veniam distinctio, corporis officiis.
    Mollitia veritatis nemo, blanditiis sint fugiat neque quibusdam sunt?
  </Text>
);

// Stories:
export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary"
};

export const XL = Template.bind({});
XL.args = {
  size: "xl"
};