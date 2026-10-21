/**
 * Append a quest id if it is new. At most 20.
 * No quest contract is called.
 */

const ID = /^[a-z0-9-]{1,32}$/;

export function complete(done: readonly string[], id: string): { ok: false; reason: string } | { ok: true; done: string[] } {
  if (done.length > 20) return { ok: false, reason: "the log already has more than 20 ids" };
  for (const existing of done) {
    if (!ID.test(existing)) return { ok: false, reason: `${existing} is not a quest id` };
  }
  if (!ID.test(id)) return { ok: false, reason: `${id} is not a quest id` };
  if (done.includes(id)) return { ok: false, reason: `${id} is already complete` };
  if (done.length === 20) return { ok: false, reason: "the log already has 20 ids" };
  return { ok: true, done: [...done, id] };
}
