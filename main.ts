import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I told you the bug was fixed. What I actually did was restart the server and pray it wouldn't come back before you checked.";

// Gate: the entry must be 1-200 characters of non-whitespace UTF-8 text.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200 non-blank chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
