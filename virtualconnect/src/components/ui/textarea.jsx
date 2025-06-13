import React from "react";

export function Textarea({ className = "", ...props }) {
  return <textarea className={`p-2 rounded ${className}`} {...props} />;
}
