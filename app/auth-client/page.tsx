"use client";

import { useSession } from "next-auth/react";

export default function AuthClientPage() {
  const { data: session } = useSession();
  return (
    <div className="text-center text-6xl text-green-700">
      <span>Client Authentication</span>
      {session && (
        <div className="text-md">{JSON.stringify(session, null, 2)}</div>
      )}
    </div>
  );
}
