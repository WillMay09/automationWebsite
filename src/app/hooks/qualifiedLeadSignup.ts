"use client";

import { useState } from "react";

export function useQualifiedLeadSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    teamSize: "",
    focusArea: "",
    urgency: "",
    winDefinition: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const submitFormData = async () => {
    setStatus("loading");
    try {
      const res = await fetch("api/qualified-lead", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ formData }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error();
      }
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        teamSize: "",
        focusArea: "",
        urgency: "",
        winDefinition: "",
      });
    } catch {
      setStatus("error");
    }
  };
  return { formData, setFormData, submitFormData, status };
}
