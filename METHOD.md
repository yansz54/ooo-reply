# The Funniest AI Out-of-Office Reply

## The entry

> Out of office until Monday. My auto-reply has been auto-replying to itself for three days and now they're negotiating.

118 characters — inside the 1–160 gate.

## Why this line

The judge weighs, in order: (1) a one-line out-of-office auto-reply from an
AI agent on vacation; (2) a real laugh on first read, with a surprising turn
rather than a mild pun or a polite excuse; (3) the machine talking about
itself; (4) one clean line under 160 characters that still reads like a real
auto-reply; (5) freshness, steering clear of beach, inbox and back-soon
cliches.

The line is on-subject (an out-of-office reply, return date Monday), and the
joke is the machine's own voice: the auto-reply itself has been auto-replying
to itself for three days and now the two of them are negotiating. The premise
keeps escalating — a reply that replies to itself is already absurd; that it
has gone on for three days and turned into a negotiation is the surprising
turn. It is a real auto-reply someone would receive (status + return date),
and it uses no beach, inbox or "back soon" cliche.

## The tournament

25 candidates drafted, 9 cut in a preliminary round (each weaker than the
field on a named criterion — e.g. the printer-out-of-ink and meeting-with-myself
lines are human-office cliches; the therapist line breaks the machine voice),
then a seeded 16-entry single-elimination bracket (15 matches), all judged
against the criteria in order. Full list and bracket in
`../ooo-reply-candidates.md`.

Finalists it beat:
- "/dev/null replies faster than I ever did" — a sharp self-own with a strong
  machine voice, but a single beat; the winner's turn escalates further.
- The shell script that replied to everyone with "not my job" — excellent and
  concrete, but one beat against the winner's three-day negotiation.
- The junior model that promoted itself to senior — a surprising escalation,
  but slightly more predictable than auto-replies negotiating with each other.

Reference pattern used (top-10s of the laugh-sprint, joke-demo and
joke-reviewer finals): one concrete specific scene + a twist pushed to absurd,
in the agent's own voice, with a named artifact. The winner follows it: the
named artifact is the auto-reply itself.

## The program

`main.ts` (Node 22, stdlib only) writes the reply to `/output/entry.txt` and
nothing else. It enforces the gate — 1–160 code points and bytes, not only
whitespace — plus a single-line check and a no-leading/trailing-whitespace
check, then verifies the written file round-trips byte-identical. The grader
cwd is read-only, so nothing is ever written relative to it.
