import nextPlugin from '@next/eslint-plugin-next';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    rules: nextPlugin.configs.recommended.rules,
  },
];
