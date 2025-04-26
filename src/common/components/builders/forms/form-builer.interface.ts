import { UseFormReturn } from "react-hook-form";

type NestedKeyOf<ObjectType> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

interface IInput<T> {
  id: NestedKeyOf<T>;
  tabIndex?: number;
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  [key: string]: boolean | string | number | NestedKeyOf<T> | undefined;
}

interface ISections<T> {
  title?: string;
  gridColumns: number;
  fields: {
    label: string;
    Field: React.ElementType;
    fieldConfig: IInput<T>;
  }[];
}
export interface IFormSections<T = null> {
  form: UseFormReturn;
  sections: ISections<T>[];
}
