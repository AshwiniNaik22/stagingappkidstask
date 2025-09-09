# Playwright E2E Testing Framework

This repository contains an **testing framework** built with [Playwright](https://playwright.dev/).  
It follows **Page Object Model (POM)**, ensures **stable tests** with robust locators, and integrates with **GitHub Actions** for CI/CD.

---

## Features

**Playwright Test Runner** with TypeScript
**Page Object Model (POM)** for maintainable tests
**Stable locators** using roles & accessible names
**Automatic authentication setup** (`.auth/user.json`)
**Configurable environments** via `.env`
**Unique data generation** (e.g., playlist names)
**Trace, video & screenshot capture** on failure
**CI/CD ready** with GitHub Actions

--

# Running Tests

**Run all tests:**

npx playwright test


**Run specific project:**

npx playwright test --project=setup
npx playwright test --project=e2e


**Run a single test file:**

npx playwright test tests/playlist.spec.ts


**Debug mode:**

npx playwright test --debug

--

# Debugging & Reports

**View HTML report:**

npx playwright show-report


**Inspect trace:**

npx playwright show-trace trace.zip


**Videos & screenshots are saved under test-results/.**
