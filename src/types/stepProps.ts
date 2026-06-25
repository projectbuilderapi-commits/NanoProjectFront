import type { FormDataType } from "./form";

export interface StepProps {
  formData: FormDataType;
  setFormData: React.Dispatch<
    React.SetStateAction<FormDataType>
  >;
}