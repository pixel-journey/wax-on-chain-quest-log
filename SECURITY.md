# Security — quest id log

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Duplicate id | refused (`already complete`) |
| Bad id charset / length > **32** | refused |
| Length already **20** | cannot append |
| Length already > 20 | refused before new id |
| Uppercase id (`Quest-1`) | refused |

Id shape: `^[a-z0-9-]{1,32}$`.

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Auth | Who may append must be `require_auth` on chain |
| Persistence | This function returns a new array; it does not write a table |
| Spoofed progress | Client-supplied `done` is not proof of play |
| Rewards | No XP / token payout here |

## Attack angles

1. Submitting capitalized ids the UI showed.  
2. Claiming on-chain completion from a local array.  
3. Growing past 20 by skipping the length check.  
4. Soft-dropping the 21st id instead of refusing.  
5. Confusing id completion with lesson readiness ([learning path](https://github.com/pixel-journey/wax-on-chain-learning-path-visualizer)).

## Honesty limits

No network. No wasm. No quest contract call.

| Sibling | Distinction |
| --- | --- |
| [credential issuer](https://github.com/pixel-journey/wax-on-chain-education-credential-issuer) | Prerequisites; 20 can become 21 |
| [learning path](https://github.com/pixel-journey/wax-on-chain-learning-path-visualizer) | Cycle refusal, readiness |
| [narrative timeline](https://github.com/pixel-journey/wax-on-chain-narrative-timeline) | Time gaps, not ids |

[docs.wax.io](https://docs.wax.io/).
