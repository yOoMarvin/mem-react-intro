"use client";

import Button from "@/components/Button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main>
        <Button type="ghost" disabled={false} onClick={() => setCount(count + 1)}>
          Supafast Button
        </Button>
        <p className="mt-8">Count: {count}</p>
      </main>
    </div>
  );
}
