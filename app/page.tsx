import { getServerSession } from "next-auth";
import { auth as authOptions } from "@/lib/auth-config";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="text-center text-6xl text-green-700">
      <span>Home</span>
      {session && (
        <div className="text-md">{JSON.stringify(session, null, 2)}</div>
      )}
    </div>
  );
}
 