import fs from 'fs'
import path from 'path'
import os from 'os'
import { execSync } from 'child_process'
import { test, expect, chromium, firefox, Page } from '@playwright/test';

export async function fillInputs(page: Page) {
  await page.goto('https://accounts.google.com/signup?hl=en')
  await page.getByRole('checkbox', { name: 'Show password' }).check()
  await page.getByRole('textbox', { name: 'Password' }).fill('pass123')
}

test('Chromium: inputs are not written to disk', async () => {
  const userDataDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'playwright-test-'))
  const browser = await chromium.launchPersistentContext(userDataDir, { headless: false })
  const page = await browser.newPage()
  await fillInputs(page)
  await page.waitForTimeout(1000)
  await browser.close()

  const found = execSync(`grep "p.a.s.s.1.2.3" --text --only-matching --recursive "${userDataDir}" || echo 'no results'`, { encoding: 'utf-8' })
  expect(found).toContain('no results')

  await fs.promises.rm(userDataDir, { recursive: true, force: true })
});

test('Firefox: inputs are not written to disk', async () => {
  const userDataDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'playwright-test-'))
  const browser = await firefox.launchPersistentContext(userDataDir, { headless: false })
  const page = await browser.newPage()
  await fillInputs(page)
  await page.waitForTimeout(1000)
  await browser.close()

  const found = execSync(`grep "pass123" --text --only-matching --recursive "${userDataDir}" || echo 'no results'`, { encoding: 'utf-8' })
  expect(found).toContain('no results')

  await fs.promises.rm(userDataDir, { recursive: true, force: true })
});
