import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "../auth/login/action";
export default async function PrivatePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <>
      <p>Hello {data.user.email}</p>
      <div>
        <form action={signOut}>
          <button type="submit" className="border-2 border-solid cursor-pointer border-black bg-white p-2 rounded-md hover:bg-gray-200">
            Log Out
          </button>
        </form>
      </div>
    </>
  );
}
