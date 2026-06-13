import TerminalConsole from "@/components/TerminalConsole";

export default function CVPage() {
  const sessions = [
    {
      id: "SESSION-AUTOKING",
      role: "Operations Manager",
      org: "Auto King Company | Dammam, KSA",
      date: "Nov 2024 - Present",
      logs: [
        "Daily Operations & Standardization: Oversee end-to-end operations across multiple service units, ensuring strict alignment with company standards and safety benchmarks.",
        "Process Optimization: Streamlined procurement processes by sourcing parts, negotiating with suppliers, and implementing inventory controls, resulting in uninterrupted operations and cost efficiencies.",
        "Team Leadership & Mentorship: Lead and supervise a diverse operations team, fostering a culture of continuous improvement and adherence to high service quality targets.",
        "KPI Monitoring & Data Analysis: Develop and submit weekly operational reports to senior management, tracking critical KPIs related to service delivery, cost efficiency, and overall team performance.",
        "Financial Oversight: Manage accounts, expense tracking, and financial reconciliation, optimizing budget utilization."
      ]
    },
    {
      id: "SESSION-PETROZONE",
      role: "Inspection Coordinator",
      org: "PETROZONE INTERNATIONAL | Al Khobar, KSA",
      date: "Apr 2024 - Oct 2024",
      logs: [
        "Workflow Optimization: Coordinated inspection operations, ensuring efficient scheduling and deployment of resources to meet critical project deadlines.",
        "Cross-Functional Collaboration: Collaborated with technical and administrative teams to sustain operational performance and enhance client satisfaction."
      ]
    },
    {
      id: "SESSION-CONCENTRIX",
      role: "Senior Operations Executive",
      org: "Concentrix | Gurugram, India",
      date: "Aug 2023 - Dec 2023",
      logs: [
        "Client Relations & Problem Solving: Managed complex client operations, utilizing analytical skills to resolve discrepancies and implement solutions that aligned with international client needs.",
        "Process Improvement: Continuously evaluated billing and operational processes, successfully reducing errors and significantly improving client retention rates.",
        "Communication: Navigated high-pressure environments by providing clear, effective communication to a global clientele."
      ]
    },
    {
      id: "SESSION-CRISPYWOOD",
      role: "Operations Executive",
      org: "Crispy wood Restaurants | Noida, India",
      date: "Feb 2022 - Aug 2023",
      logs: [
        "Supported daily organizational operations, contributing to a smooth and efficient customer service environment."
      ]
    }
  ];

  return (
    <div>
      <header className="dashboard-header">
        <h1 className="dashboard-title">OPERATOR DOSSIER</h1>
        <p className="dashboard-subtitle">Classified Operational Profile and Session Logs</p>
      </header>

      {/* Identity Profile Block */}
      <section className="card-obsidian">
        <div className="dossier-header-grid">
          <div className="dossier-avatar-box">
            <span>👤</span>
          </div>
          <div className="dossier-identity">
            <div className="identity-row">
              <span className="identity-label">Operator Code</span>
              <span className="identity-value">ABDUL BASIT</span>
            </div>
            <div className="identity-row">
              <span className="identity-label">Clearance</span>
              <span className="identity-value">LEVEL 4 (ADMIN)</span>
            </div>
            <div className="identity-row">
              <span className="identity-label">Sector Scope</span>
              <span className="identity-value">Dammam / Al Khobar, KSA</span>
            </div>
            <div className="identity-row">
              <span className="identity-label">Registry Status</span>
              <span className="identity-value status-active">ACTIVE</span>
            </div>
            <div className="identity-row">
              <span className="identity-label">Designation</span>
              <span className="identity-value">Operations Manager | Systems Analyst</span>
            </div>
            <div className="identity-row">
              <span className="identity-label">Contact Payload</span>
              <span className="identity-value">gemsabdul@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="dossier-summary-box">
        <strong>BRIEFING SUMMARY:</strong> Results-driven Operations Manager with a proven track record of optimizing complex workflows, leading cross-functional teams, and driving operational excellence. Leveraging a strong technical foundation (BCA in Mathematics, Computer Science, and Data Analysis) and analytical thinking, I specialize in process automation, KPI development, and systems analysis to identify inefficiencies and implement scalable best practices. Eager to bring my fast-track leadership experience and passion for sustainable, technology-driven operations.
      </section>

      {/* Core Competencies (Capabilities Matrix) */}
      <section className="card-obsidian" style={{ marginBottom: '32px' }}>
        <h3 className="card-title">CAPABILITIES MATRIX (COMPETENCIES)</h3>
        <div className="stats-grid">
          <div className="stat-bar-container">
            <div className="stat-bar-label">
              <span>Operations Management & Workflow Optimization</span>
              <span>95%</span>
            </div>
            <div className="stat-bar-track">
              <div className="stat-bar-fill" style={{ width: "95%" }}></div>
            </div>
          </div>
          <div className="stat-bar-container">
            <div className="stat-bar-label">
              <span>Systems Analysis & Process Automation</span>
              <span>90%</span>
            </div>
            <div className="stat-bar-track">
              <div className="stat-bar-fill" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="stat-bar-container">
            <div className="stat-bar-label">
              <span>KPI Monitoring & Financial Auditing</span>
              <span>88%</span>
            </div>
            <div className="stat-bar-track">
              <div className="stat-bar-fill" style={{ width: "88%" }}></div>
            </div>
          </div>
          <div className="stat-bar-container">
            <div className="stat-bar-label">
              <span>Cross-Functional Team Leadership</span>
              <span>92%</span>
            </div>
            <div className="stat-bar-track">
              <div className="stat-bar-fill" style={{ width: "92%" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Logs (Experience Timeline) */}
      <section className="dashboard-header" style={{ marginBottom: '20px' }}>
        <h2 className="dashboard-title" style={{ fontSize: '1.25rem' }}>DECRYPTED SESSION LOGS (EXPERIENCE)</h2>
      </section>

      <section className="session-logs">
        {sessions.map((s) => (
          <div key={s.id} className="session-item">
            <div className="session-header">
              <div>
                <h4 className="session-role">{s.role}</h4>
                <span className="session-org">{s.org}</span>
              </div>
              <div>
                <p className="session-meta-id">{s.id}</p>
                <span className="session-date">{s.date}</span>
              </div>
            </div>
            <ul className="session-logs-list">
              {s.logs.map((log, i) => (
                <li key={i}>{log}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Interactive Terminal Diagnostic Console */}
      <section className="dashboard-header" style={{ marginTop: '40px', marginBottom: '20px' }}>
        <h2 className="dashboard-title" style={{ fontSize: '1.25rem' }}>SYSTEM DIAGNOSTIC CONSOLE</h2>
        <p className="dashboard-subtitle">Query real-time profile data and workflow logs</p>
      </section>
      
      <TerminalConsole />
    </div>
  );
}
