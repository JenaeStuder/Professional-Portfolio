// The address is stored in pieces and only joined when a visitor clicks, so it never
// appears in the page's HTML (where scrapers look for it).
const parts = ["jenaestuder11518", "gmail.com"];
export const emailAddress = () => parts.join("@");

const subject = "Hello from your portfolio";
const body = "Hi Jenae,\n\n";
const enc = encodeURIComponent;

export const mailtoUrl = () =>
  `mailto:${emailAddress()}?subject=${enc(subject)}&body=${enc(body)}`;
export const gmailUrl = () =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(emailAddress())}&su=${enc(subject)}&body=${enc(body)}`;
export const outlookUrl = () =>
  `https://outlook.live.com/mail/0/deeplink/compose?to=${enc(emailAddress())}&subject=${enc(subject)}&body=${enc(body)}`;
