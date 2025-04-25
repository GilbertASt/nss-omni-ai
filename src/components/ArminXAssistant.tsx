import { useState, useEffect, useRef } from "react";

export default function ArminXAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([
    "Hi, I'm ArminX. How can I help optimize your value stream today?",
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const responses = [
    "Here's an insight — stay aligned!",
    "Try mapping your lead time next!",
    "Have you considered identifying your biggest bottleneck?",
  ];
  const randomResponse = () =>
    responses[Math.floor(Math.random() * responses.length)];

  const handleSend = () => {
    if (!input) return;

    const userMessage = `You: ${input}`;
    const thinkingMessage = "ArminX: Let me think...";

    setMessages((prev) => [...prev, userMessage, thinkingMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        `ArminX: ${randomResponse()}`,
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg overflow-hidden border z-50">
      <div
        className="bg-blue-600 text-white px-4 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "ArminX Assistant (Close)" : "Need Help? Ask ArminX"}
      </div>

      {isOpen && (
        <div className="p-4 space-y-2">
          <div className="h-40 overflow-y-auto text-sm text-gray-800 space-y-1">
            {messages.map((msg, i) => (
              <div key={i}>{msg}</div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="border rounded-l px-2 py-1 flex-1 text-sm"
              placeholder="Ask a question..."
              aria-label="Ask ArminX Assistant"
            />
            <button
              onClick
