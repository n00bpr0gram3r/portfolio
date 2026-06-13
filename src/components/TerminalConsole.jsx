'use client';

import { useState, useEffect, useRef } from 'react';

export default function TerminalConsole() {
  const [history, setHistory] = useState([
    { type: 'input', text: 'help' },
    { type: 'output', text: 'AVAILABLE COMMANDS:\n  cat about_me.txt           - Print out Operator biography\n  run education.sh           - Inspect academic and educational credentials\n  tail -f philosophy.log     - View system design & work philosophy logs\n  clear                      - Reset console viewport' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, isTyping, currentInput]);

  const executeCommand = (cmd) => {
    if (isTyping) return;

    setIsTyping(true);
    let index = 0;
    setCurrentInput('');

    // Simulate typing the command line
    const interval = setInterval(() => {
      if (index < cmd.length) {
        setCurrentInput((prev) => prev + cmd[index]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          processCommandOutput(cmd);
          setCurrentInput('');
          setIsTyping(false);
        }, 150);
      }
    }, 40);
  };

  const processCommandOutput = (cmd) => {
    let output = '';
    
    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    switch (cmd) {
      case 'cat about_me.txt':
        output = `OPERATOR PROFILE: ABDUL BASIT
--------------------------------------
A Systems Analyst and Operations Manager who operates at the intersection of process engineering and technology. With a Bachelor of Computer Applications (BCA), I don't just coordinate workflows—I debug them. I view operational bottlenecks as system anomalies, applying data-driven methods, continuous telemetry (KPIs), and automated pipelines to optimize organizational throughput.`;
        break;

      case 'run education.sh':
        output = `[+] RUNNING SYSTEM INVENTORY: EDUCATION
---------------------------------------
DEGREE: Bachelor of Computer Applications (BCA)
INSTITUTION: Maulana Mazharul Haque Arabic & Persian University, Patna
SPECIALIZATION: Mathematics, Computer Science, and Data Analysis
TIMELINE: June 2019 - September 2022
STATUS: VERIFIED // DEGREE CONFERRED`;
        break;

      case 'tail -f philosophy.log':
        output = `[+] RETRIEVING OPERATIONAL LOGS: WORK METHODOLOGY
------------------------------------------------
[10:43:01] INFO: "Standardization is safety. Write playbooks, automate the repetitive, protect focus hours."
[12:15:42] INFO: "Data beats intuition. If you can't measure it with a KPI, you can't optimize it."
[15:30:11] INFO: "Cross-functional synchronization. Operations is the glue between tech, admin, and delivery."
[18:00:00] INFO: "Egress/Ingress control: streamline supply chains, audit vendor contracts, protect budget."`;
        break;

      case 'help':
        output = `AVAILABLE COMMANDS:
  cat about_me.txt           - Print out Operator biography
  run education.sh           - Inspect academic and educational credentials
  tail -f philosophy.log     - View system design & work philosophy logs
  clear                      - Reset console viewport`;
        break;

      default:
        output = `sh: command not found: ${cmd}`;
        break;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: cmd },
      { type: 'output', text: output }
    ]);
  };

  return (
    <div className="terminal-card">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-btn red"></span>
          <span className="terminal-btn yellow"></span>
          <span className="terminal-btn green"></span>
        </div>
        <div className="terminal-title">OPERATOR COMMAND LINE CONSOLE - PORT 1337</div>
        <div style={{ width: '38px' }}></div>
      </div>

      <div className="terminal-body" ref={terminalBodyRef}>
        {history.map((line, idx) => (
          <div key={idx} className="terminal-line">
            {line.type === 'input' ? (
              <span className="terminal-prompt">
                operator@bbp-monitor:~$ <span style={{ color: '#ffffff' }}>{line.text}</span>
              </span>
            ) : (
              <span style={{ whiteSpace: 'pre-wrap' }}>{line.text}</span>
            )}
          </div>
        ))}
        {isTyping && (
          <div className="terminal-line">
            <span className="terminal-prompt">
              operator@bbp-monitor:~$ <span style={{ color: '#ffffff' }}>{currentInput}</span>
              <span className="terminal-cursor">█</span>
            </span>
          </div>
        )}
      </div>

      <div className="terminal-actions">
        <button className="terminal-action-btn" onClick={() => executeCommand('cat about_me.txt')} disabled={isTyping}>
          cat about_me.txt
        </button>
        <button className="terminal-action-btn" onClick={() => executeCommand('run education.sh')} disabled={isTyping}>
          run education.sh
        </button>
        <button className="terminal-action-btn" onClick={() => executeCommand('tail -f philosophy.log')} disabled={isTyping}>
          tail -f philosophy.log
        </button>
        <button className="terminal-action-btn" onClick={() => executeCommand('help')} disabled={isTyping}>
          help
        </button>
        <button className="terminal-action-btn" style={{ borderColor: 'var(--border-dim)', color: 'var(--text-dim)' }} onClick={() => executeCommand('clear')} disabled={isTyping}>
          clear
        </button>
      </div>

      <style jsx global>{`
        .terminal-card {
          background-color: #080808;
          border: 1px solid var(--border-dim);
          border-radius: 8px;
          padding: 0;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          overflow: hidden;
          margin-top: 32px;
        }

        .terminal-header {
          background-color: #121212;
          border-bottom: 1px solid var(--border-dim);
          padding: 10px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .terminal-buttons {
          display: flex;
          gap: 6px;
        }

        .terminal-btn {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }
        .terminal-btn.red { background-color: #ef4444; }
        .terminal-btn.yellow { background-color: #eab308; }
        .terminal-btn.green { background-color: #10b981; }

        .terminal-title {
          color: var(--text-secondary);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .terminal-body {
          padding: 20px;
          min-height: 250px;
          max-height: 380px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: #a1a1aa; /* Silver terminal text */
          background-color: #0c0c0c;
        }

        .terminal-line {
          line-height: 1.5;
          white-space: pre-wrap;
          font-family: var(--font-mono);
        }

        .terminal-prompt {
          color: #3b82f6; /* Blue operator prompt */
          font-weight: bold;
        }

        .terminal-cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
          color: #3b82f6;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .terminal-actions {
          padding: 16px 20px;
          background-color: #121212;
          border-top: 1px solid var(--border-dim);
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .terminal-action-btn {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-dim);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .terminal-action-btn:hover:not(:disabled) {
          border-color: var(--text-primary);
          color: var(--text-primary);
          background-color: var(--bg-card);
        }

        .terminal-action-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
