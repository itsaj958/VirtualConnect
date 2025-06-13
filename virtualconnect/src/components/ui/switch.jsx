import React from "react";

export function Switch({ defaultChecked = false }) {
  return (
    <input
      type="checkbox"
      defaultChecked={defaultChecked}
      className="w-5 h-5"
    />
  );
}
