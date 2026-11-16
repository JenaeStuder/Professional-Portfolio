"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email address copied to clipboard.");
    } catch {
      setStatus("Couldn't copy automatically. Please select the address above.");
    }
    setTimeout(() => setStatus(""), 4000);
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="rounded-md border border-ui px-4 py-2.5 font-semibold hover:bg-surface"
      >
        Copy address
      </button>
      <span role="status" className="sr-only">
        {status}
      </span>
      {status && (
        <span aria-hidden="true" className="self-center text-sm text-muted">
          {status}
        </span>
      )}
    </>
  );
}
