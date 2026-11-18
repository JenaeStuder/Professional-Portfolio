"use client";

import { useState } from "react";
import { emailAddress, gmailUrl, mailtoUrl, outlookUrl } from "@/lib/email";

const secondary = "btn btn-outline";

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
      setStatus("Couldn't copy automatically. Try one of the email options instead.");
    }
    setTimeout(() => setStatus(""), 4000);
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            window.location.href = mailtoUrl();
          }}
          className="btn btn-primary"
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
      <p role="status" className="mt-3 min-h-6 text-sm text-muted">
        {status}
      </p>
    </>
  );
}
