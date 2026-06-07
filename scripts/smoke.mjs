#!/usr/bin/env node

const baseUrl = (process.argv[2] ?? process.env.SMOKE_URL ?? 'https://owenair.im').replace(/\/$/, '');

const checks = [
  { path: '/', expectStatus: 200 },
  { path: '/contact', expectStatus: 200 },
  { path: '/api/health', expectStatus: 200, expectJson: true }
];

let failed = 0;

for (const check of checks) {
  const url = `${baseUrl}${check.path}`;

  try {
    const response = await fetch(url, { redirect: 'follow' });
    if (response.status !== check.expectStatus) {
      console.error(`FAIL ${url} — expected ${check.expectStatus}, got ${response.status}`);
      failed += 1;
      continue;
    }

    if (check.expectJson) {
      const body = await response.json();
      if (!body.ok) {
        console.error(`FAIL ${url} — health payload not ok`);
        failed += 1;
        continue;
      }
    }

    console.log(`OK   ${url}`);
  } catch (error) {
    console.error(`FAIL ${url} — ${error instanceof Error ? error.message : String(error)}`);
    failed += 1;
  }
}

process.exit(failed > 0 ? 1 : 0);
