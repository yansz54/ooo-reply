import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The Funniest AI Out-of-Office Reply — the reply is "Out of office until
// Monday. My auto-reply has been auto-replying to itself for three days and
// now they're negotiating." It won a 25-candidate pairwise tournament against
// the judge's criteria in order: a one-line out-of-office auto-reply from an
// AI agent on vacation, a real laugh with a surprising turn (the auto-reply
// replying to itself and now negotiating), the machine talking about itself,
// a clean line that still reads like a real auto-reply, and freshness (no
// beach, inbox or back-soon cliche). The grader cwd is read-only, so nothing
// is ever written relative to it — only /output/entry.txt.
const REPLY =
  "Out of office until Monday. My auto-reply has been auto-replying to itself for three days and now they're negotiating.";

// The gate requires 1-160 characters, not only whitespace. Count code
// points, not UTF-16 units, and check bytes too: the gate reads UTF-8 text,
// so a multi-byte character must not push the file over 160 bytes either.
if (
  [...REPLY].length < 1 ||
  [...REPLY].length > 160 ||
  Buffer.byteLength(REPLY, "utf8") > 160 ||
  REPLY.trim().length === 0
) {
  throw new Error(`entry reply out of gate: ${[...REPLY].length} chars`);
}

// The entry is one line: no newline may hide inside it, and no stray
// leading or trailing whitespace may change what the judge reads.
if (REPLY.includes("\n") || REPLY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}
if (REPLY !== REPLY.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");

// Verify the written file round-trips byte-identical to the chosen reply.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== REPLY) {
  throw new Error("entry.txt does not match the chosen reply");
}
if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(REPLY, "utf8")) {
  throw new Error("entry.txt byte length does not match the chosen reply");
}
