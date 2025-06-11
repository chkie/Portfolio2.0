import { describe, expect, test, vi } from 'vitest';
import { get } from 'svelte/store';
import { getText } from './getText';

// Mock the lang store with an unsupported language
vi.mock('$lib/stores/lang', () => {
  const { writable } = require('svelte/store');
  return { lang: writable('es') }; // Spanish not supported
});

describe('getText', () => {
  test('falls back to German when language is unsupported', () => {
    const store = getText('hero', 'headline');
    expect(get(store)).toBe('Willkommen');
  });
});
