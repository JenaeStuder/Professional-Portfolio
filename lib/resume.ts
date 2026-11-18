import { existsSync } from "node:fs";
import { join } from "node:path";
import { resumeFile } from "./content";

// Server-only (static export, evaluated at build time). The link exists only if the PDF does,
// and it includes the /staging base path on the staging build.
export const resume = {
  available: existsSync(join(process.cwd(), "public", resumeFile)),
  href: `${process.env.BASE_PATH ?? ""}/${resumeFile}`,
};
