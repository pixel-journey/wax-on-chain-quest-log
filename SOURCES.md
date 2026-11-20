# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | WAX context |
| [learning-path visualizer](https://github.com/pixel-journey/wax-on-chain-learning-path-visualizer) | Lesson ready / locked status |

## Product facts locked by tests

- Id: `^[a-z0-9-]{1,32}$`.
- Append only if new; duplicate → `already complete`.
- **Hard stop at 20** total ids (cannot accept a 21st).
- Input already longer than 20 is refused before the new id is considered.
- No quest contract is called.
