"use client";

import type { ReactElement } from "react";
import { ModalProps } from "./modal.type";
import { Card } from "#/lib/components/atoms/card";
import { Text } from "#/lib/components/atoms/text";
import { FiX } from "react-icons/fi";
import { useDisableScroll } from "#/lib/hooks/disable-scroll";

export function Modal({ title, isOpen, setOpen, children, ...props }: ModalProps): ReactElement {
  // Disable scroll when modal is open:
  useDisableScroll("modal", isOpen);

  // Functions:
  function close(): void {
    setOpen(false);
  }

  // Render:
  if (!isOpen) return <></>;

  return (
    <>
      {/* Blur background */}
      <div className="fixed top-0 left-0 h-screen w-screen z-40 bg-black/60" onClick={() => close()} />

      {/* Modal */}
      <div id="modal" className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-50">
        <Card className="space-y-4 max-w-[800px] w-1/2 lg:w-11/12">
          {/* Title and close button */}
          <div className="flex justify-between items-center">
            <Text size="2xl" className="font-semibold">{title}</Text>

            <FiX className="text-2xl text-black cursor-pointer" onClick={() => close()} />
          </div>

          {/* Content */}
          <div {...props}>
            {children}
          </div>
        </Card>
      </div>
    </>
  );
}