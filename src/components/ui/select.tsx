"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

interface SelectProps {
  id: string;
  name?: string;
  value: string;
  onValueChange: (value: string) => void;
  options: readonly string[];
  disabled?: boolean;
}

export function Select({
  id,
  name,
  value,
  onValueChange,
  options,
  disabled,
}: SelectProps) {
  return (
    <SelectPrimitive.Root
      name={name}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
    >
      <SelectPrimitive.Trigger
        id={id}
        className="form-control group flex h-11 w-full items-center justify-between gap-2 rounded-xl border border-slate-300 bg-white px-3.5 text-left text-sm font-normal text-slate-900 shadow-sm transition-[border-color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className="truncate">
          <SelectPrimitive.Value />
        </span>
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-data-[state=open]:rotate-180" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={7}
          collisionPadding={12}
          className="z-[70] max-h-[var(--radix-select-content-available-height)] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-[0_12px_35px_-8px_rgba(18,33,62,0.22)]"
        >
          <SelectPrimitive.ScrollUpButton className="flex h-6 items-center justify-center text-slate-500">
            <ChevronUp className="h-4 w-4" />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport>
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option}
                value={option}
                className="relative flex min-h-10 cursor-pointer select-none items-center rounded-lg py-2 pl-3 pr-9 text-[13px] font-normal text-slate-700 outline-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-950 data-[state=checked]:bg-blue-50 data-[state=checked]:font-medium data-[state=checked]:text-blue-700"
              >
                <SelectPrimitive.ItemText>{option}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute right-3">
                  <Check className="h-4 w-4" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="flex h-6 items-center justify-center text-slate-500">
            <ChevronDown className="h-4 w-4" />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
