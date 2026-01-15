"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function CalendarPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session");
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  //loading sessionId
  useEffect(() => {
    //code that will actually load the sessionId//
    async function fetchSession() {
      if (!sessionId) return;
      try {
        const res = await fetch(`/api/sessions/${sessionId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) {
          throw new Error("Invalid session");
        }
        const data = await res.json();
        setEmail(data.email);
      } catch (error) {
        setEmail(null);
        throw new Error("Failed to fetch email");
      } finally {
        setLoading(false);
      }
    }
    fetchSession();
  }, [sessionId]); //dependency array

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (!email) {
    return <div className="text-white">Invalid Email Address</div>;
  }

  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center">
      <iframe
        src={`https://cal.com/william-mayhood-dch7nh/30-bussiness-demo-meeting?email=${encodeURIComponent(
          email
        )}`}
        className="w-full h-screen md:h-[800px] md:w-[600px] lg:w-[800px] rounded-lg border-0"
        title="Schedule a Strategy Call"
      ></iframe>
    </div>
  );
}
