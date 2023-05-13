"use client";
import clsx from "clsx";
import React from "react";
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps> = ({
  register,
  errors,
  type,
  placeholder,
  required,
  id,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, {required})}
        placeholder={placeholder}
        className="w-full px-4 py-2 font-light text-black rounded-full bg-neutral-200 focus:outline-none"
      />
    </div>
  );
};

export default MessageInput;
