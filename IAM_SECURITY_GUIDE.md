# IAM and security guide

## Recommended practices
- Never use the root user for everyday administration.
- Enable MFA for the root account and privileged IAM users.
- Prefer IAM roles for EC2 rather than saving access keys on the instance.
- Grant least privilege: only the actions and resources the project requires.
- Do not commit credentials, `.pem` keys, access keys, secrets, or account details to GitHub.
- Restrict SSH ingress to your current public IP.
- Keep the OS packages updated.
- Use HTTPS for production/public use; HTTP is only suitable for a basic demonstration.
- Review CloudTrail and account security notifications if available.

## Project security configuration
| Control | Intended setting |
|---|---|
| SSH | TCP 22 from your IP only |
| HTTP | TCP 80 public for demo site |
| Instance permissions | IAM role; no embedded access keys |
| Credentials | Never stored in source files or Git |
| OS updates | Apply updates regularly |
| Data | Current app data remains in each user's browser local storage |

This document is a learning checklist, not a security audit.
