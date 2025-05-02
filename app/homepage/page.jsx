import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "../(auth)/login/action";
import Navbar from "@/components/navbar";
export default async function PrivatePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p>Welcome to homepage!</p>
      </div>
    </>
  );
}
