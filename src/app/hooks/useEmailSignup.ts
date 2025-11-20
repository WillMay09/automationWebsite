"use client";

import { useState } from "react";

export function useEmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const submitEmail = async () => {
    //transitions to the UI
    setStatus("loading");
    try {
      const res = await fetch("api/submit-email", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      console.log(data);

      //check
      if (!res.ok) {
        throw new Error();
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };
  return { email, setEmail, submitEmail, status };
}
