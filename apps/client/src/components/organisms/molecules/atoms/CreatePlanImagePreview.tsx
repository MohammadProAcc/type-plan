import {
  CreatePlanPreviewContainer,
  CreatePlanPreviewImg,
  CreatePlanPreviewOverLayer,
} from "elements";
import React from "react";
import { FQl_dynamic_upload_IFile } from "state/declarations/schema/schema";

interface CreatePlanImagePreviewProps {
  file: FQl_dynamic_upload_IFile;
  removeCallback: (file: FQl_dynamic_upload_IFile) => void;
}

export const CreatePlanImagePreview: React.FC<CreatePlanImagePreviewProps> = ({
  file,
  removeCallback,
}) => {
  return (
    <CreatePlanPreviewContainer onClick={() => removeCallback(file)}>
      <CreatePlanPreviewImg Src={file.filename} />
      <CreatePlanPreviewOverLayer />
    </CreatePlanPreviewContainer>
  );
};
