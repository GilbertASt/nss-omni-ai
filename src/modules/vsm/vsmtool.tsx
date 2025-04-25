"use client";

import { useState } from "react";
import ArminXAssistant from "@/components/ArminXAssistant";

interface ProcessStep {
  id: number;
  name: string;
  leadTime: number;
  processTime: number;
}

export default function VSMTool() {
  const [steps, setSteps] = useState<ProcessStep[]>([]);
  const [stepName, setStepName] = useState("");
  const [leadTime, setLeadTime] = useState(0);
  const [processTime, setProcessTime] = useState(0);

  const addStep = () => {
    if (!stepName || leadTime <= 0 || processTime <= 0) return;

    const newStep: ProcessStep = {
      id: steps.length + 1,
      name: stepName,
      leadTime,
      processTime,
    };
    setSteps([...steps, newStep]);
    setStepName("");
    setLeadTime(0);
    setProcessTime(0);
  };

  const deleteStep = (id: number) => {
    setSteps((prev) => prev.filter((s) => s.id !== id));
  };

  const totalLeadTime = steps.reduce((sum, s) => sum + s.leadTime, 0);
  const totalProcessTime = steps.reduce((sum, s) => sum + s.processTime, 0);
  const flowEfficiency = totalLeadTime
    ? ((totalProcessTime / totalLeadTime) * 100).toFixed(1)
    : "0";

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-blue-700">
        Value Stream Mapping Tool
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Step Name"
          className="border rounded px-2 py-1"
          value={stepName}
          onChange={(e) => setStepName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Lead Time (min)"
          className="border rounded px-2 py-1"
          value={leadTime}
          onChange={(e) => setLeadTime(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Process Time (min)"
          className="border rounded px-2 py-1"
          value={processTime}
          onChange={(e) => setProcessTime(Number(e.target.value))}
        />
        <button
          onClick={addStep}
          className="md:col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Step
        </button>
      </div>

      <div className="border-t pt-4 space-y-2">
        {steps.map((s) => (
          <div
            key={s.id}
            className="flex justify-between border-b py-2 text-sm"
          >
            <span>{s.name}</span>
            <span>Lead: {s.leadTime} min</span>
            <span>Process: {s.processTime} min</span>
            <button
              onClick={() => deleteStep(s.id)}
              className="text-red-500 hover:text-red-700 text-xs ml-4"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded p-4 text-sm space-y-1">
        <p>Total Lead Time: {totalLeadTime} min</p>
        <p>Total Process Time: {totalProcessTime} min</p>
        <p>Flow Efficiency: {flowEfficiency}%</p>
      </div>

      <ArminXAssistant />
    </div>
  );
}
