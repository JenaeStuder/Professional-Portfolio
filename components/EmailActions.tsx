"use client";

import { useState } from "react";
import { emailAddress, gmailUrl, mailtoUrl, outlookUrl } from "@/lib/email";

const secondary = "btn btn-outline w-full sm:w-auto";

// Buttons, not links: the address is only assembled on click (see lib/email.ts).
export function EmailActions() {
  const [status, setStatus] = useState("");

  function openCompose(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(emailAddress());
      setStatus("Email address copied to clipboard.");
    } catch {
      setStatus("Couldn't copy. Try one of the email options.");
    }
    setTimeout(() => setStatus(""), 4000);
  }

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          onClick={() => {
            window.location.href = mailtoUrl();
          }}
          className="btn btn-primary w-full sm:w-auto"
        >
          Email me
        </button>
        <button type="button" onClick={() => openCompose(gmailUrl())} className={secondary}>
          Compose in Gmail<span className="sr-only"> (opens in a new tab)</span>
        </button>
        <button type="button" onClick={() => openCompose(outlookUrl())} className={secondary}>
          Compose in Outlook<span className="sr-only"> (opens in a new tab)</span>
        </button>
        <button type="button" onClick={copy} className={secondary}>
          Copy email address
        </button>
      </div>
      <p role="status" className="mt-2 min-h-5 text-center text-sm text-muted sm:text-left">
        {status}
      </p>
    </>
  );
}
