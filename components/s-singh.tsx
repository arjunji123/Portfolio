import React from "react";

/**
 * The "S" in "Arjun S Naruka" — grows into "Singh" when an ancestor with the
 * `group` class is hovered. Put it inside any `group` element.
 */
export default function SSingh() {
  return (
    <span className="inline-grid grid-cols-[auto_0fr] transition-[grid-template-columns] duration-500 ease-out group-hover:grid-cols-[auto_1fr]">
      <span>S</span>
      <span className="overflow-hidden whitespace-nowrap">
        <span className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">ingh</span>
      </span>
    </span>
  );
}
