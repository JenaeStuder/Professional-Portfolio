// Career start: June 2019 (internship). The count goes up in the anniversary month (June),
// so the site never claims more experience than you have.
const START = { year: 2019, month: 6 };

export function yearsOfExperience(now = new Date()): number {
  const anniversaryReached = now.getMonth() + 1 >= START.month;
  return now.getFullYear() - START.year - (anniversaryReached ? 0 : 1);
}

const WORDS = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
  "Twenty",
];

// "Seven" for headings; falls back to digits past twenty.
export const yearsInWords = (n: number) => WORDS[n] ?? String(n);
