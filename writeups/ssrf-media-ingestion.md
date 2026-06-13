---
id: "ALERT-001"
title: "SSRF on Media Ingestion Pipeline via Redirect"
date: "2026-06-12"
severity: "high"
category: "SSRF"
status: "Resolved"
summary: "Abusing a media processing service's downloader to follow redirects to internal link-local addresses, Kubernetes tokens, and AWS/GCP metadata endpoints."
---

# SSRF on Media Ingestion Pipeline via Redirect

## Vulnerability Summary
During a security audit, we identified that the platform's video ingestion engine followed HTTP 302 redirects to internal networks. The downloader did not enforce target IP filters, allowing connections to local loopback ports (`127.0.0.1`), Kubernetes Service Account tokens, and cloud metadata endpoints (`169.254.169.254`).

## Technical Breakdown
The target endpoint accepting video URLs for transcoding allows users to import remote video files.

### 1. The Redirection Trick
By providing a URL to an external server we control, we can return a HTTP 302 redirect payload:

```http
HTTP/1.1 302 Found
Location: http://169.254.169.254/latest/meta-data/
```

### 2. Network Boundary Bypass
The server-side worker resolved the redirect internally, bypassing corporate network firewalls and requesting the sensitive AWS IMDS metadata endpoints.

## Remediation & Hardening
1. **Disable Redirects by Default:** Disable redirect-following inside the HTTP downloader library configuration.
2. **Egress Subnet Filtering:** Move transcode workers to an isolated private subnet with strict egress rules blocking all RFC 1918 and link-local ranges.
