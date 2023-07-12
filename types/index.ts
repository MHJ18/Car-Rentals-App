import { MouseEventHandler } from "react";
export interface CustomButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  styles?: string;
  type?: "button" | "submit" | string;
}
