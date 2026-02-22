export interface Classification {
  value: string;
  labelKey: string;
}

export const projectClassifications: Classification[] = [
  { value: "prototyping", labelKey: "classifications.prototyping" },
  { value: "architecture", labelKey: "classifications.architecture" },
  { value: "uiux", labelKey: "classifications.uiux" },
  { value: "hardware", labelKey: "classifications.hardware" },
];
