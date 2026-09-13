"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, RefreshCw, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

interface CommandStep {
  command: string;
  output: Array<{
    type: "info" | "success" | "progress" | "table" | "badge";
    text?: string;
    progressPercent?: number;
    lines?: string[];
  }>;
  delayAfter?: number;
}

const TERMINAL_STEPS: CommandStep[] = [
  {
    command: "tweliza init --client \"Your Brand\"",
    output: [
      { type: "info", text: "Initializing tweliza Digital Studio suite..." },
      { type: "info", text: "Loading custom brand identity & UI/UX architecture..." },
      { type: "progress", progressPercent: 100 },
      { type: "success", text: "Studio engine initialized. Project workspace ready." }
    ],
    delayAfter: 1200
  },
  {
    command: "tweliza deploy --services web,creative,growth",
    output: [
      { type: "info", text: "Compiling responsive web application..." },
      { type: "success", text: "✔ Web Experience: 100% Performance (Lighthouse)" },
      { type: "success", text: "✔ Visual Identity: Tweliza Gold & Aubergine Palette" },
      { type: "success", text: "✔ Growth Engine: SEO & Social Presence Active" }
    ],
    delayAfter: 1500
  },
  {
    command: "tweliza status --live",
    output: [
      {
        type: "badge",
        text: "✨ TWELIZA DIGITAL SOLUTIONS IS READY TO BUILD YOUR IDEA"
      },
      {
        type: "table",
        lines: [
          "------------------------------------------------",
          "  STUDIO  : TWELIZA DIGITAL SOLUTIONS",
          "  SERVICES: WEB · CREATIVE · SOCIAL · AI",
          "  STATUS  : ONLINE & ACCEPTING NEW CLIENTS",
          "------------------------------------------------"
        ]
      }
    ],
    delayAfter: 3500
  }
];

export function PowerShellTerminal() {
  const [displayedSteps, setDisplayedSteps] = useState<
    Array<{
      command: string;
      isTyping: boolean;
      outputs: CommandStep["output"];
    }>
  >([]);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [currentTypedCharIdx, setCurrentTypedCharIdx] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const terminalBodyRef = useRef<HTMLDivElement>(null);

  // Blinking cursor timer
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Main command typing and execution machine
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const currentScriptStep = TERMINAL_STEPS[currentStepIdx];
    if (!currentScriptStep) {
      // End of script loop reset
      timeoutId = setTimeout(() => {
        setDisplayedSteps([]);
        setCurrentStepIdx(0);
        setCurrentTypedCharIdx(0);
        setIsExecuting(false);
      }, 4000);
      return () => clearTimeout(timeoutId);
    }

    if (!isExecuting) {
      // Typing phase
      if (currentTypedCharIdx < currentScriptStep.command.length) {
        timeoutId = setTimeout(() => {
          setDisplayedSteps((prev) => {
            const next = [...prev];
            if (!next[currentStepIdx]) {
              next[currentStepIdx] = {
                command: currentScriptStep.command.slice(0, currentTypedCharIdx + 1),
                isTyping: true,
                outputs: []
              };
            } else {
              next[currentStepIdx] = {
                ...next[currentStepIdx],
                command: currentScriptStep.command.slice(0, currentTypedCharIdx + 1)
              };
            }
            return next;
          });
          setCurrentTypedCharIdx((c) => c + 1);
        }, 35);
      } else {
        // Finished typing command -> start execution
        setIsExecuting(true);
        timeoutId = setTimeout(() => {
          setDisplayedSteps((prev) => {
            const next = [...prev];
            if (next[currentStepIdx]) {
              next[currentStepIdx].isTyping = false;
              next[currentStepIdx].outputs = currentScriptStep.output;
            }
            return next;
          });

          // Wait after execution before moving to next command
          timeoutId = setTimeout(() => {
            setIsExecuting(false);
            setCurrentTypedCharIdx(0);
            setCurrentStepIdx((idx) => idx + 1);
          }, currentScriptStep.delayAfter || 1500);
        }, 300);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentStepIdx, currentTypedCharIdx, isExecuting]);

  // Auto scroll terminal to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [displayedSteps, currentTypedCharIdx, isExecuting]);

  return (
    <div className="w-full max-w-full sm:max-w-xl mx-auto rounded-2xl overflow-hidden bg-[#000000] border-2 border-[#1d001d]/60 dark:border-[#e6e8ec]/25 shadow-2xl shadow-[#1d001d]/40 font-mono text-left select-none transition-all duration-300">
      {/* PowerShell Window Header Bar */}
      <div className="px-3.5 py-2.5 bg-[#1d001d] dark:bg-[#03012c] border-b border-[#a832a8]/30 dark:border-[#e6e8ec]/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Window Control Buttons */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/30 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/30 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/30 inline-block" />
          </div>

          <Terminal className="w-3.5 h-3.5 text-[#a832a8] dark:text-[#e6e8ec]" />
          <span className="text-[11px] sm:text-xs font-bold text-[#e6e8ec] tracking-wide">
            PowerShell v7.4 (tweliza-cli)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-[#a832a8]/30 text-[#e6e8ec] border border-[#e6e8ec]/20">
            <Cpu className="w-3 h-3" />
            PS C:\tweliza&gt;
          </span>
        </div>
      </div>

      {/* Terminal Content Screen */}
      <div
        ref={terminalBodyRef}
        className="p-3.5 sm:p-5 h-[260px] sm:h-[320px] overflow-y-auto space-y-3 bg-[#000000]/95 text-[#e6e8ec] text-[11px] sm:text-xs leading-relaxed scrollbar-thin scrollbar-thumb-[#1d001d]"
      >
        {/* Terminal Header Greeting */}
        <div className="text-slate-500 text-[10px] sm:text-[11px] pb-1 border-b border-white/10 flex items-center justify-between">
          <span>Windows PowerShell -- tweliza Digital Solutions CLI</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> READY
          </span>
        </div>

        {/* Rendered Command Steps */}
        {displayedSteps.map((step, sIdx) => (
          <div key={sIdx} className="space-y-1.5">
            {/* Command Line Prompt */}
            <div className="flex items-center flex-wrap gap-1 text-[#e6e8ec] font-bold">
              <span className="text-cyan-400">PS C:\tweliza&gt;</span>
              <span className="text-[#ffffff] font-semibold">{step.command}</span>
              {step.isTyping && showCursor && (
                <span className="inline-block w-2 h-3.5 bg-[#a832a8] dark:bg-[#e6e8ec] ml-0.5 animate-pulse" />
              )}
            </div>

            {/* Command Outputs */}
            {step.outputs && step.outputs.length > 0 && (
              <div className="pl-2 sm:pl-3 space-y-1 text-slate-300">
                {step.outputs.map((out, oIdx) => {
                  if (out.type === "info") {
                    return (
                      <div key={oIdx} className="text-slate-400 text-[11px]">
                        &gt; {out.text}
                      </div>
                    );
                  }
                  if (out.type === "progress") {
                    return (
                      <div key={oIdx} className="py-1">
                        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-0.5">
                          <span>Build Progress</span>
                          <span className="text-cyan-400 font-bold">100% Complete</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#1d001d] via-[#a832a8] to-[#4b36e3] rounded-full w-full animate-pulse" />
                        </div>
                      </div>
                    );
                  }
                  if (out.type === "success") {
                    return (
                      <div key={oIdx} className="text-emerald-400 font-medium flex items-center gap-1.5 text-[11px]">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{out.text}</span>
                      </div>
                    );
                  }
                  if (out.type === "badge") {
                    return (
                      <div key={oIdx} className="my-1.5 p-2 rounded-lg bg-[#1d001d] border border-[#a832a8]/60 text-xs font-bold text-[#e6e8ec] text-center shadow-md">
                        {out.text}
                      </div>
                    );
                  }
                  if (out.type === "table" && out.lines) {
                    return (
                      <div key={oIdx} className="p-2 rounded-md bg-white/5 border border-white/10 text-[10px] sm:text-[11px] text-slate-300 space-y-0.5 font-mono">
                        {out.lines.map((line, lIdx) => (
                          <div key={lIdx} className={lIdx === 0 || lIdx === out.lines!.length - 1 ? "text-slate-500" : "text-[#e6e8ec] font-bold"}>
                            {line}
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        ))}

        {/* Active Idle Cursor Prompt if all steps typed */}
        {displayedSteps.length === TERMINAL_STEPS.length && !isExecuting && (
          <div className="flex items-center gap-1 text-[#e6e8ec] font-bold pt-1">
            <span className="text-cyan-400">PS C:\tweliza&gt;</span>
            {showCursor && (
              <span className="inline-block w-2 h-3.5 bg-[#a832a8] dark:bg-[#e6e8ec] ml-0.5" />
            )}
          </div>
        )}
      </div>

      {/* Terminal Footer Info */}
      <div className="px-3.5 py-1.5 bg-[#1d001d]/60 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
        <span className="flex items-center gap-1">
          <RefreshCw className="w-2.5 h-2.5 animate-spin text-[#a832a8]" /> Live CLI Session
        </span>
        <span>UTF-8 · PowerShell 7</span>
      </div>
    </div>
  );
}
