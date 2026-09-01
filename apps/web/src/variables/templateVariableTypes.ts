export type VariableType =
  | 'text'
  | 'image'
  | 'number'
  | 'currency';

export interface TemplateVariable {
  id?: string;
  name: string;
  type: VariableType;
  required?: boolean;
  defaultValue?: string;
}
