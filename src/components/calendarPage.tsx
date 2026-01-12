
"use client"
import { useSearchParams } from "next/navigation";
import { use } from "react";

export default function CalendarPage() {
    const searchParams = useSearchParams();
    console.log(searchParams.get("email"));
  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center">
      <iframe
        src={`https://cal.com/william-mayhood-dch7nh/30-bussiness-demo-meeting?email=${searchParams.get("email")}`}
        className="w-full h-screen md:h-[800px] md:w-[600px] lg:w-[800px] rounded-lg border-0"
        title="Schedule a Strategy Call"
      ></iframe>
    </div>
  );
}