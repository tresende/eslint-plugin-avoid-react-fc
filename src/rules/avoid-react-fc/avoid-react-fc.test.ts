import { rule } from '.'

import { TSESLint } from '@typescript-eslint/utils'
const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser')
})

ruleTester.run('avoid-react-fc', rule, {
  valid: [
    {
      code: `import Preact from 'Preact'
      const Title: Preact.FC<any> = (props) => {
        return createElement( 'h1', { className: 'greeting' }, 'Hello' );
      }
      `
    }
  ],
  invalid: [
    {
      code: `import React from 'react'

      const Title: React.FC<any> = (props) => {
        return createElement( 'h1', { className: 'greeting' }, 'Hello' );
      }
      `,
      errors: [{ messageId: 'avoid-react-fc' }]
    },
    {
      code: `import React from 'react'

      const Title: React.FunctionComponent<TitleProps> = ({children}: TitleProps) => {
        return createElement( 'h1', { className: 'greeting' }, 'Hello' );
      }
      `,
      errors: [{ messageId: 'avoid-react-fc' }]
    },
    {
      code: `import React from 'react'

        const Title: React.FunctionComponent<TitleProps> = ({children}: TitleProps) => {
        return createElement( 'h1', { className: 'greeting' }, 'Hello' );
      }
      `,
      errors: [{ messageId: 'avoid-react-fc' }]
    }
  ]
})
