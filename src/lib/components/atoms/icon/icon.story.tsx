import { Meta, StoryFn } from "@storybook/react";
import { Icon } from "./icon";

// Config:
export default {
  title: "Atoms/Icon",
  component: Icon,
  args: {
    src: "/images/icons/microsoft-teams-logo.png",
    alt: "Microsoft Teams logo"
  }
} satisfies Meta<typeof Icon>;

// Template:
const Template: StoryFn<typeof  Icon> = args => <Icon {...args} />;

// Stories:
export const Default = Template.bind({});
Default.args = {};