import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
import type { AxeResults, Result } from 'axe-core'

const wcagLevelAATags = [
  'wcag2a',
  'wcag2aa',
  'wcag21a',
  'wcag21aa',
  'wcag22a',
  'wcag22aa',
]

const pages = [
  { name: 'cadastro', path: '/cadastro' },
  { name: 'login', path: '/login' },
]

function formatViolations(violations: AxeResults['violations']) {
  return violations
    .map((violation: Result) => {
      const nodes = violation.nodes
        .map((node) => {
          const target = node.target.join(', ')
          const summary = node.failureSummary?.trim() ?? 'Sem resumo.'

          return `    - ${target}: ${summary}`
        })
        .join('\n')

      return [
        `${violation.id}: ${violation.help}`,
        `  Impacto: ${violation.impact ?? 'unknown'}`,
        `  WCAG: ${violation.tags.filter((tag) => tag.startsWith('wcag')).join(', ')}`,
        `  Ajuda: ${violation.helpUrl}`,
        nodes,
      ].join('\n')
    })
    .join('\n\n')
}

test.describe('acessibilidade WCAG nivel AA', () => {
  for (const pageToScan of pages) {
    test(`${pageToScan.name} nao deve ter violacoes automatizadas`, async ({
      page,
    }) => {
      await page.goto(pageToScan.path)

      const results = await new AxeBuilder({ page })
        .withTags(wcagLevelAATags)
        .analyze()

      expect(results.violations, formatViolations(results.violations)).toEqual(
        [],
      )
    })
  }
})
