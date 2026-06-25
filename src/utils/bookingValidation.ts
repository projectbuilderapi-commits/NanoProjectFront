import type {
  FormDataType,
} from "../types/form";

export const validateStep = (
  step: number,
  formData: FormDataType
): string | null => {
  switch (step) {
    case 1:
      if (!formData.name.trim())
        return "Name is required";

      if (!formData.email.trim())
        return "Email is required";

      if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
          formData.email
        )
      )
        return "Invalid email address";

      if (!formData.phone.trim())
        return "Phone number is required";

      if (!formData.college.trim())
        return "College is required";

      return null;

    case 2:
      if (!formData.projectType)
        return "Select a project type";

      return null;

    case 3:
      if (!formData.platform)
        return "Select a platform";

      return null;

    case 4:
      if (
        formData.authentication.length === 0
      )
        return "Select authentication options";

      return null;

    case 5:
      if (
        formData.features.length === 0
      )
        return "Select at least one feature";

      return null;

    case 6:
      if (
        formData.requirements.length === 0
      )
        return "Select at least one requirement";

      return null;

    case 7:
      if (
        !formData.projectTitle.trim()
      )
        return "Project title is required";

      if (
        !formData.description.trim()
      )
        return "Project description is required";

      if (
        formData.description.length < 30
      )
        return "Description must be at least 30 characters";

      return null;

    default:
      return null;
  }
};