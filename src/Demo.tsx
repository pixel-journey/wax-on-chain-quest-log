"use client";

import { complete } from "./quest";

export function Demo() {
  const log = complete(["quest-1"], "quest-2");
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>A new id is appended</h1>
      <p className="lede">quest-2 follows quest-1. Repeating quest-1 is refused. No quest contract is called.</p>
      {log.ok ? <p>Done: {log.done.join(", ")}.</p> : <p>{log.reason}</p>}
    </main>
  );
}
