import React from "react";
import { Modal } from "./Modal";
import { Modal as IModal, Stylable } from "types";
import { FQl_dynamic_upload_IFile } from "state/declarations/schema/schema";
import { FullScreenImage } from "elements";

interface FullScreenMediaModalProps extends Stylable, Required<IModal> {
  media: FQl_dynamic_upload_IFile;
}

export const FullScreenMediaModal: React.FC<FullScreenMediaModalProps> = ({
  on,
  toggle,
  media,
}) => {
  return (
    <Modal
      on={on}
      toggle={toggle}
    >
      <FullScreenImage Src={media?.filename} />
    </Modal>
  );
};
