# AI handoff — on-chain quest log

## Non-negotiables

1. Id matches `^[a-z0-9-]{1,32}$`.
2. Append only if new. Duplicate → `already complete`.
3. **Hard stop at 20** total ids. A 21st is refused.
4. An input already longer than 20 is refused before the new id is considered.
5. No quest contract is called. Nothing is stored on chain in this lab.
6. Distinct from the learning-path visualizer (ready/locked) and the credential issuer (cap allows 20 → 21).

## Prompt seeds

- "Append a new slug when 19 ids exist."
- "Refuse a 21st id and an input that is already over 20."
- "Duplicate id — already complete, list unchanged."

## Do not

- Call a live quest contract from unit tests.
- Reuse the credential issuer's 20-may-become-21 rule here.
