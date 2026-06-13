---
id: "ALERT-002"
title: "DNS Rebinding in Local HTTP/SSE-based MCP Server"
date: "2026-06-11"
severity: "high"
category: "DNS Rebind"
status: "Resolved"
summary: "DNS Rebinding attacks bypass the Same-Origin Policy (SOP) on local unauthenticated Model Context Protocol (MCP) server ports, leading to remote tool execution."
---

# DNS Rebinding in Local HTTP/SSE-based MCP Server

## Vulnerability Summary
Model Context Protocol (MCP) servers utilizing HTTP/SSE transports (running locally on port `6333` or similar) were found to lack Host header validation and authentication. This enables external malicious sites to perform a DNS Rebinding attack to run arbitrary local tools.

## Technical Breakdown
When a user visits a malicious website, the page runs JavaScript that connects back to the attacker's domain.

1. The attacker's DNS server answers with a low TTL (1 second), mapping the domain to the attacker's server.
2. The page loads and executes.
3. Once the TTL expires, a second request triggers a new DNS query. The attacker's DNS server now answers with `127.0.0.1`.
4. The browser, thinking the site is still the same origin, sends HTTP requests to the local port, bypassing the Same-Origin Policy.

## Remediation & Hardening
1. **Validate Host Headers:** Configure HTTP middleware to verify that all incoming requests contain a Host header explicitly matching `localhost` or `127.0.0.1`.
2. **Transition to Stdio Transport:** Standardize on standard input/output (stdio) pipelines rather than running local network port listeners.
