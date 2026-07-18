import type { ComponentProps, CSSProperties } from "react";
// reuse

type ButtonBaseProps = ComponentProps<"button">;
type ButtonProps = ButtonBaseProps & { variant?: "primary" | "secondary" };

export function Button({ variant = "primary", style, ...rest }: ButtonProps) {
  const base: CSSProperties = {
    padding: "10px",
  };
  return <button style={{ ...base, ...style }} {...rest} />;
}
