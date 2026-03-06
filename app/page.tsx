"use client";

import { useState } from "react";
import Image from "next/image";

// --- DATA ---

type PersonalityKey = "sweet" | "zen" | "social" | "pragmatist";

interface Answer {
  emoji: string;
  text: string;
  key: PersonalityKey;
}

interface Question {
  text: string;
  answers: Answer[];
}

interface Result {
  name: string;
  coffee: string;
  tagline: string;
  image: string;
}

const QUESTIONS: Question[] = [
  {
    text: "It's Saturday morning. What's your ideal start?",
    answers: [
      { emoji: "🛌", text: "Slow mornings in bed with something sweet", key: "sweet" },
      { emoji: "🧘", text: "Quiet meditation before the world wakes up", key: "zen" },
      { emoji: "📱", text: "Texting friends to make brunch plans", key: "social" },
      { emoji: "✅", text: "Getting a head start on my to-do list", key: "pragmatist" },
    ],
  },
  {
    text: "Pick your dream vacation:",
    answers: [
      { emoji: "🏖️", text: "A beach resort with cocktails and desserts", key: "sweet" },
      { emoji: "🏯", text: "A silent retreat in the mountains of Japan", key: "zen" },
      { emoji: "🎉", text: "A festival city full of music and new people", key: "social" },
      { emoji: "🗺️", text: "A well-planned road trip hitting all the highlights", key: "pragmatist" },
    ],
  },
  {
    text: "How do you handle a stressful workday?",
    answers: [
      { emoji: "🍫", text: "Treat myself to something comforting", key: "sweet" },
      { emoji: "🌿", text: "Take a breath and focus on one thing at a time", key: "zen" },
      { emoji: "💬", text: "Vent to a friend or coworker", key: "social" },
      { emoji: "📋", text: "Make a list and tackle it systematically", key: "pragmatist" },
    ],
  },
  {
    text: "What's your coffee shop order style?",
    answers: [
      { emoji: "🍬", text: "\"Can I add caramel AND vanilla syrup?\"", key: "sweet" },
      { emoji: "🤍", text: "\"Just a plain black coffee, please.\"", key: "zen" },
      { emoji: "🤝", text: "\"I'll have whatever my friend is having!\"", key: "social" },
      { emoji: "⏱️", text: "\"Medium drip, to go, quickly please.\"", key: "pragmatist" },
    ],
  },
  {
    text: "Your friends would describe you as:",
    answers: [
      { emoji: "💖", text: "Warm, bubbly, and always cheerful", key: "sweet" },
      { emoji: "🕊️", text: "Calm, thoughtful, and grounded", key: "zen" },
      { emoji: "🌟", text: "Energetic, fun, and the life of the party", key: "social" },
      { emoji: "🔧", text: "Reliable, focused, and no-nonsense", key: "pragmatist" },
    ],
  },
  {
    text: "What's your relationship with caffeine?",
    answers: [
      { emoji: "🎀", text: "Coffee is a treat — the sweeter the better!", key: "sweet" },
      { emoji: "☯️", text: "It's a ritual, not a necessity", key: "zen" },
      { emoji: "🥳", text: "It's fuel for adventures with people I love", key: "social" },
      { emoji: "⚡", text: "It's fuel — I need it to function", key: "pragmatist" },
    ],
  },
];

const RESULTS: Record<PersonalityKey, Result> = {
  sweet: {
    name: "The Sweet Enthusiast",
    coffee: "Caramel Latte",
    tagline: "Life is better with a little sweetness — and you know it. You turn every moment into a treat.",
    image: "/caramel-latte.jpg",
  },
  zen: {
    name: "The Zen Minimalist",
    coffee: "Black Coffee",
    tagline: "Pure, simple, and deeply intentional. You find beauty in stillness and flavor in simplicity.",
    image: "/black-coffee.jpg",
  },
  social: {
    name: "The Social Butterfly",
    coffee: "Cappuccino",
    tagline: "You bring the energy, warmth, and froth wherever you go. Coffee tastes better shared.",
    image: "/cappuccino.jpg",
  },
  pragmatist: {
    name: "The Practical Pragmatist",
    coffee: "Classic Drip Coffee",
    tagline: "Efficient, dependable, and always on point. You get things done — coffee included.",
    image: "/drip-coffee.jpg",
  },
};

// --- SCORING ---

function getResult(answers: PersonalityKey[]): PersonalityKey {
  const counts: Record<PersonalityKey, number> = { sweet: 0, zen: 0, social: 0, pragmatist: 0 };
  for (const key of answers) {
    counts[key]++;
  }
  return (Object.entries(counts) as [PersonalityKey, number][]).reduce(
    (best, [key, count]) => (count > counts[best] ? key : best),
    "sweet" as PersonalityKey
  );
}

// --- COMPONENT ---

export default function Home() {
  const [phase, setPhase] = useState<"intro" | "quiz" | "result">("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityKey[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<PersonalityKey | null>(null);
  const [result, setResult] = useState<PersonalityKey | null>(null);

  function startQuiz() {
    setPhase("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setResult(null);
  }

  function handleAnswer(key: PersonalityKey) {
    setSelectedAnswer(key);
    const newAnswers = [...answers, key];

    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        setAnswers(newAnswers);
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        const finalResult = getResult(newAnswers);
        setResult(finalResult);
        setPhase("result");
      }
    }, 300);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-fuchsia-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg">

        {/* INTRO VIEW */}
        {phase === "intro" && (
          <div className="text-center flex flex-col items-center gap-6">
            <div className="text-6xl">☕</div>
            <h1 className="text-3xl font-black text-gray-800 leading-tight">
              What&apos;s Your Coffee Personality?
            </h1>
            <p className="text-gray-500 text-lg font-semibold">
              Answer 6 quick questions and we&apos;ll reveal your perfect brew.
            </p>
            <button
              onClick={startQuiz}
              className="mt-2 bg-orange-400 hover:bg-orange-500 text-white font-extrabold text-lg px-10 py-3 rounded-full transition-colors shadow-md"
            >
              Start Quiz ✨
            </button>
          </div>
        )}

        {/* QUIZ VIEW */}
        {phase === "quiz" && (
          <div className="flex flex-col gap-6">
            {/* Progress dots */}
            <div className="flex justify-center gap-2">
              {QUESTIONS.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i < currentQuestion
                      ? "bg-orange-400"
                      : i === currentQuestion
                      ? "bg-pink-400"
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>

            {/* Question text */}
            <div>
              <p className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-2">
                Question {currentQuestion + 1} of {QUESTIONS.length}
              </p>
              <h2 className="text-xl font-extrabold text-gray-800 leading-snug">
                {QUESTIONS[currentQuestion].text}
              </h2>
            </div>

            {/* Answer options */}
            <div className="flex flex-col gap-3">
              {QUESTIONS[currentQuestion].answers.map((answer) => (
                <button
                  key={answer.key}
                  onClick={() => handleAnswer(answer.key)}
                  disabled={selectedAnswer !== null}
                  className={`flex items-center gap-3 border-2 rounded-2xl px-4 py-3 text-left font-bold text-gray-700 transition-all
                    ${
                      selectedAnswer === answer.key
                        ? "border-orange-400 bg-orange-50 scale-[0.98]"
                        : selectedAnswer !== null
                        ? "border-gray-100 bg-gray-50 opacity-50"
                        : "border-gray-200 hover:border-orange-300 hover:bg-orange-50 cursor-pointer"
                    }`}
                >
                  <span className="text-2xl">{answer.emoji}</span>
                  <span className="text-sm leading-snug">{answer.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* RESULT VIEW */}
        {phase === "result" && result && (
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="w-full relative h-52 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={RESULTS[result].image}
                alt={RESULTS[result].coffee}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold text-pink-400 uppercase tracking-widest">
                Your Coffee Personality
              </p>
              <h2 className="text-2xl font-black text-gray-800">
                {RESULTS[result].name}
              </h2>
              <p className="text-orange-500 font-extrabold text-lg">
                ☕ {RESULTS[result].coffee}
              </p>
              <p className="text-gray-500 font-semibold text-sm leading-relaxed">
                {RESULTS[result].tagline}
              </p>
            </div>

            <button
              onClick={startQuiz}
              className="mt-2 bg-pink-400 hover:bg-pink-500 text-white font-extrabold text-base px-8 py-3 rounded-full transition-colors shadow-md"
            >
              Take Again 🔄
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
