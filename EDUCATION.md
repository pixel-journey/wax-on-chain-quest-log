# Education — one id, once

> **Rung:** `npm test` passes. No quest contract is called.  
> **The test is the rule.** Whether a lesson is ready is [wax-on-chain-learning-path-visualizer](https://github.com/pixel-journey/wax-on-chain-learning-path-visualizer). This file only appends an id.

Official context: [docs.wax.io](https://docs.wax.io/).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Append a new id and refuse a repeat |
| Intermediate | Explain the 20-id hard stop and id charset |
| Masterclass | Refuse to call this an on-chain quest table |

---

## Beginner — one scene

| Call | Locked result |
| --- | --- |
| `["quest-1"]` plus `quest-2` | `["quest-1", "quest-2"]` |
| the same id again | not ok. Reason: `quest-1 is already complete` |
| 20 ids, then another | not ok. Reason: `the log already has 20 ids` |
| 21 ids already in the list | not ok. Reason: `the log already has more than 20 ids` |
| an id of 32 characters | ok |
| an id of 33 characters | not ok |

An id is lowercase letters, digits, and hyphens (`^[a-z0-9-]{1,32}$`). `Quest` is refused.

```bash
npm test
```

---

## Intermediate — caps

| Rule | Detail |
| --- | --- |
| Id shape | 1..32 of `a-z`, `0-9`, `-` |
| Existing rows | every existing id must also match the regex |
| At exactly 20 | cannot append |
| Above 20 already | refused before the new id is considered |

Unlike the credential issuer, **20 cannot accept one more**. The credential lab allows 20 existing rows to become 21; this log stops at 20 total.

Order is preserved: append goes to the end. Completeness is string equality, not a sorted set.

---

## Masterclass

### Common mistakes

1. Treating this as a contract table. No notify, no RAM, no auth.  
2. Allowing `Quest-1` because the UI title is capitalized.  
3. Soft-capping at 20 by silently dropping the 21st. This lab refuses.  
4. Confusing id completion with lesson readiness (that is the learning-path visualizer).

### What this is not

- An AtomicAssets or quest-contract write
- Proof the player finished content
- A leaderboard

### Exercises

1. Log `["quest-1"]`, complete `quest-1` again — reason?  
2. Twenty ids, then `quest-x` — ok? (No.)  
3. Max id length? (32.)

---

## What this course will not teach

- Live quest contract actions
- XP or reward payouts
- That a string id is an NFT template id
