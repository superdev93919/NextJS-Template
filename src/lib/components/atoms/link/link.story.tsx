import { Meta, StoryFn } from "@storybook/react";
import { Text } from "#/lib/components/atoms/text";
import { Link } from "./link";

// Config:
export default {
  title: "Atoms/Link",
  component: Link,
  args: {
    href: "#"
  }
} satisfies Meta<typeof Link>;

// Template:
const Template: StoryFn<typeof  Link> = args => (
  <Text>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Voluptatem <Link {...args}>recusandae assumenda</Link> voluptas dolorem quos modi,
    architecto repudiandae repellat <Link {...args}>sequi atque</Link> sint ex aliquid sapiente voluptate!
    Labore culpa molestiae consequatur ex!
  </Text>
);

// Stories:
export const Default = Template.bind({});
Default.args = {};