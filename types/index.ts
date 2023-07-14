import { MouseEventHandler } from "react";
export interface CustomButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  styles?: string;
  type?: "button" | "submit" | null;
}
export type CustomFilter = {
  title: string;
};
export type Search = {
  state: String;
  setstate: (state: string) => void;
};