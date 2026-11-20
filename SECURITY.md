# Security — quest id log

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Duplicate id | refused |
| Bad id charset / length > 32 | refused |
| Length already 20 | cannot append |
| Length already > 20 | refused before new id |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Auth | Who may append must be `require_auth` on chain |
| Persistence | This function returns a new array; it does not write a table |
| Spoofed progress | Client-supplied `done` is not proof of play |

## Attack angles

1. Submitting capitalized ids the UI showed.  
2. Claiming on-chain completion from a local array.  
3. Growing past 20 by skipping the length check.

## Honesty limits

No network. No wasm. No quest contract call. [docs.wax.io](https://docs.wax.io/).
