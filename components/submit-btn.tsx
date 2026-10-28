import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group flex h-14 w-full items-center justify-center gap-3 rounded-full bg-white font-display text-lg font-medium uppercase tracking-tight text-ink transition hover:bg-white/85 disabled:opacity-60"
    >
      {pending ? (
        <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-ink" />
      ) : (
        <>
          Send brief
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </>
      )}
    </button>
  );
}
