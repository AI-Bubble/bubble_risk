import * as React from "react";

type SliderProps = {
  value: [number];
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (v: [number]) => void;
  className?: string;
};

// Simple HTML range wrapper that matches your current usage.
// (Not Radix—keeps it dependency-free.)
export function Slider({ value, min=0, max=100, step=1, onValueChange, className }: SliderProps) {
  return (
    <input
      type="range"
      className={className || "w-full"}
      min={min}
      max={max}
      step={step}
      value={value[0]}
      onChange={(e) => onValueChange?.([Number(e.target.value)])}
    />
  );
}
