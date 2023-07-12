"use client";
import React from "react";
import Image from "next";
import { CustomButtonProps } from "@/types";
const CustomButton = ({ title, styles, onClick, type }: CustomButtonProps) => {
  return (
    <>
      <button
        disabled={false}
        type={type ?? "button"}
        className={`custom-btn ${styles}`}
        onClick={onClick}
      >
        <span className={"flex-1"}>{title}</span>
      </button>
    </>
  );
};

export default CustomButton;
