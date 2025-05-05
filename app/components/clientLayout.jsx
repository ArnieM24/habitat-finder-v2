"use client";

import { useEffect } from "react";
import supabase from "@/lib/supabaseClient";

export default function ClientLayout({ children }) {
  useEffect(() => {
    supabase.auth.getSession(); // Trigger session restoration
  }, []);

  return <>{children}</>;
}
