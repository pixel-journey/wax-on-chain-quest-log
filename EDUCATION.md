# Education — one id, once

> **Rung:** `npm test` passes. No quest contract is called.  
> **The test is the rule.** Whether a lesson is ready is [wax-on-chain-learning-path-visualizer](https://github.com/pixel-journey/wax-on-chain-learning-path-visualizer). This file only appends an id.

## Predict, then run

| Call | Locked result |
| --- | --- |
| `["quest-1"]` plus `quest-2` | `["quest-1", "quest-2"]` |
| the same id again | not ok. Reason: `quest-1 is already complete` |
| 20 ids, then another | not ok. Reason: `the log already has 20 ids`. Unlike the course-row cap, 20 cannot accept one more. |
| 21 ids already in the list | not ok. Reason: `the log already has more than 20 ids` |
| an id of 32 characters | ok |
| an id of 33 characters | not ok |

An id is lowercase letters, digits, and hyphens. `Quest` is refused.
