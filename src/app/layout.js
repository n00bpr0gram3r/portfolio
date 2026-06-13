import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Abdul Basit | Security Analyst & Auditor Portfolio",
  description: "Security operations center dashboard, vulnerability writeups, and technical research findings portfolio of Abdul Basit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="dashboard-layout">
          <Sidebar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
