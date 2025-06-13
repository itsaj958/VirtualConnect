import React from "react";

export function Input({ className = "", ...props }) {
  return <input className={`p-2 rounded ${className}`} {...props} />;
}
