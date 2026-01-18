"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function useQualifiedLeadSignup() {
  const router = useRouter();
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
    //validate required fields
    if (
      !formData.email ||
      !formData.name ||
      !formData.teamSize ||
      !formData.focusArea ||
      !formData.urgency ||
      !formData.winDefinition
    ) {
      setStatus("error");
      return;
    }
    //visual feedback to user/prevents double submissions
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

      //route to calendar with sessionId
      router.push(`/calendar?session=${data.sessionId}`);

      setStatus("success");
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          teamSize: "",
          focusArea: "",
          urgency: "",
          winDefinition: "",
        });
      });
    } catch (error) {
      console.error("Error submitting form data:", error);
      setStatus("error");
    }
  };
  return { formData, setFormData, submitFormData, status };
}
