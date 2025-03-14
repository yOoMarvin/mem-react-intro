"use client";

import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main>
        <Title text="Hello React 👋" />
        <p className="text-center">Let's get started with React and Next.js</p>
        <Title text="Let's go" />
      </main>
    </div>
  );
}
