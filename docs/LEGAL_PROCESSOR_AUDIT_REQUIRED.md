# LEGAL_PROCESSOR_AUDIT_REQUIRED

Processor / recipient audit for ViaNexis production listing is **not complete** in this public-site repository.

Do not invent processor names for the public privacy policy.

## Required owner / engineering inputs

For each active production dependency, document:

- legal name of provider
- function (hosting, email, push, maps, AI, monitoring, DNS, storage)
- data categories processed
- processing region (if known)
- transfer mechanism if outside EEA (if applicable)
- active vs planned status
- link to provider privacy notice (internal reference)

## Known categories to investigate (not confirmed as public list)

- Cloud / backend hosting
- Database and object storage
- Domain / DNS
- Email delivery (SMTP / transactional)
- Push notifications (FCM / APNs) — only if active in Play build
- Map tile provider
- Monitoring / error reporting
- AI / OCR / translation providers
- Support tooling

## Rule

Planned providers must not appear as active processors on public legal pages.
