"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error(error);
  }

  revalidatePath("/", "layout");
  redirect("/homepage");
}

export async function signup(formData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // Step 1: Sign up
  const { data: signupData, error: signupError } = await supabase.auth.signUp({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (signupError) {
    console.error(signupError);
    redirect("/error");
  }

  const user = signupData.user;

  // Step 2: Insert user into user_info table
  if (user) {
    const { error: insertError } = await supabase.from("users_info").insert([
      {
        UUID: user.id, // same as auth.users.id
        email: user.email,
      },
    ]);

    if (insertError) {
      console.error(insertError);
      redirect("/error");
    }
  }

  // Step 3: Redirect
  revalidatePath("/", "layout");
  redirect("/homepage");
}

export async function signOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/login");
}

const signInWith = (provider) => async () => {
  const supabase = await createClient();

  const auth_callback_url = `${process.env.SITE_URL}/callback?next=/homepage`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: auth_callback_url,
    },
  });

  console.log(data);

  if (error) {
    console.log(error);
  }

  redirect(data.url);
};

const signInWithGoogle = signInWith("google");

export { signInWithGoogle };
