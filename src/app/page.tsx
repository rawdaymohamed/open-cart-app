"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("")
  return (
    <div className="p-4 flex flex-col gap-y-4 max-w-sm mx-auto">

      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button variant="elevated">Button</Button>
      <Progress value={40} />
      <Textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <Checkbox />
    </div>
  );
}