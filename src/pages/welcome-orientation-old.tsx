import React from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const WelcomeOrientation = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <Card className="shadow-lg rounded-2xl p-6 bg-white">
          <CardContent>
            <h1 className="text-3xl font-bold text-center mb-4 text-blue-700">
              Welcome to Your AI-Driven Transformation!
            </h1>
            <p className="text-gray-700 text-lg text-center mb-6">
              You’ve taken the first step towards optimizing your business
              operations with AI-powered insights and tools.
            </p>

            <h2 className="text-2xl font-semibold mb-3">What to Expect</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Assessment Tool:</strong> Identify inefficiencies and receive AI-driven insights.</li>
              <li><strong>Value Stream Mapping (VSM) Tool:</strong> Optimize your workflows with real-time recommendations.</li>
              <li><strong>Personalized AI Guidance:</strong> ArminX, your AI Sensei, will guide you through your transformation journey.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Meet ArminX – Your AI Sensei</h2>
            <p className="text-gray-700 mb-4">
              ArminX is your digital mentor, observing and delivering AI-powered
              insights to help streamline your business processes.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">How to Prepare</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Reflect on your current business operations – What’s working? What needs improvement?</li>
              <li>Be ready to answer key questions about your workflow.</li>
              <li>Keep an open mind – AI insights may uncover unexpected opportunities!</li>
            </ul>

            <div className="mt-8 flex justify-center">
              <Button
                className="px-6 py-3 text-lg rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => router.push("/assessment-introduction")}
              >
                Continue to Assessment Introduction
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default WelcomeOrientation;
