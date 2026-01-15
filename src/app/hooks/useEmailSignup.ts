"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { routerServerGlobal } from "next/dist/server/lib/router-utils/router-server-context";

export function useEmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const router = useRouter();

  const submitEmail = async () => {
    //transitions to the UI
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      return;
    }
    //visual feedback to user/prevents double submissions
    setStatus("loading");
    //sends email to the backend, backend creates a lead and session
    //sends back sessionId
    try {
      const res = await fetch("api/leads", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit email");
      }
      //get the sessionId
      const { sessionId } = await res.json(); 
      //console.log(data);

      //route to calendar
      router.push(`/calendar?session=${sessionId}`);

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };
  return { email, setEmail, submitEmail, status };
}
