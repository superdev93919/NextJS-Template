import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Button } from "#/lib/components/atoms/button";
import { Text } from "#/lib/components/atoms/text";
import { Modal } from "./modal";

// Config:
export default {
  title: "Atoms/Modal",
  component: Modal,
  args: {
    title: "Confirm this action"
  },
  argTypes: {
    isOpen: { control: { disable: true } },
    setOpen: { control: { disable: true } }
  }
} satisfies Meta<typeof Modal>;

// Template:
const Template: StoryFn<typeof  Modal> = ({ isOpen: _, setOpen: __, ...args }) => {
  const [isOpen, setOpen] = useState<boolean>(true);

  return (
    <>
      {/* Modal */}
      <Modal isOpen={isOpen} setOpen={setOpen} className="space-y-4" {...args}>
        <Text>
          Distinctio ex quod asperiores omnis. Numquam aliquid tempora fugiat consequuntur,
          sapiente nam culpa quos libero ex nostrum quibusdam aut obcaecati, dicta vero ?
        </Text>

        <div className="flex justify-end items-center gap-3">
          <Button variant="secondary" size="small" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="danger" size="small" onClick={() => alert("Confirmed!")}>Confirm</Button>
        </div>
      </Modal>

      {/* Background content when modal is open */}
      {isOpen && (
        Array.from({ length: 50 }).map((_, i) => (
          <Text key={i} className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Iure, eveniet perspiciatis nobis quod doloremque dolor sit dolorum vel.{" "}

            {i % 2 === 0 && "Assumenda minus consequuntur aspernatur facere repudiandae ea ullam aliquam obcaecati sit vero."}
          </Text>
        ))
      )}

      {/* Button to open the modal */}
      {!isOpen && (
        <Button variant="primary" onClick={() => setOpen(true)}>Open the modal</Button>
      )}
    </>
  );
};

// Stories:
export const Default = Template.bind({});
Default.args = {};