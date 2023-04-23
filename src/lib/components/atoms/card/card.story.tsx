import { Meta, StoryFn } from "@storybook/react";
import { Text } from "#/lib/components/atoms/text";
import { Card } from "./card";

// Config:
export default {
  title: "Atoms/Card",
  component: Card
} satisfies Meta<typeof Card>;

// Template:
const Template: StoryFn<typeof  Card> = args => (
  <Card className="space-y-3" {...args}>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Animi, consequatur accusantium ducimus placeat iste corporis facilis officiis autem.
      Explicabo necessitatibus voluptas sequi blanditiis corrupti laboriosam sed perferendis iure veniam quasi.
    </Text>

    <Text>
      Distinctio ex quod asperiores omnis. Numquam aliquid tempora fugiat consequuntur,
      sapiente nam culpa quos libero ex nostrum quibusdam aut obcaecati, dicta vero.
    </Text>
  </Card>
);

// Stories:
export const Default = Template.bind({});
Default.args = {};