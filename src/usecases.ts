import { ATOMIC_ORIGIN, atomicAssets } from "./api";
import { complete } from "./quest";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const log = complete(["quest-1"], "quest-2");
if (!log.ok) throw new Error(log.reason);
const done = log;

export const USE_CASES: UseCase[] = [
  {
    title: "Owned assets are not a quest log",
    detail: `The log is ${done.done.join(", ")}. The asset request is not sent and not treated as completion.`,
    request: atomicAssets(ATOMIC_ORIGIN, "alice", "pixeljourney"),
    transaction: null,
  },
  {
    title: "A repeated id is refused",
    detail: "quest-1 a second time is refused. No complete action is built.",
    request: atomicAssets(ATOMIC_ORIGIN, "bob", "pixeljourney"),
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (done.done.join() !== "quest-1,quest-2") throw new Error("quest");
}
