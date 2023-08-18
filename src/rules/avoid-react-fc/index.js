import { ESLintUtils } from '@typescript-eslint/utils';
export const RULE_NAME = 'avoid-react-fc';
const notAllowed = ['FC', 'FunctionComponent'];
export const rule = ESLintUtils.RuleCreator(() => __filename)({
    name: RULE_NAME,
    meta: {
        type: 'suggestion',
        docs: {
            description: ``,
            recommended: 'error'
        },
        schema: [],
        messages: {
            'avoid-react-fc': 'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177'
        }
    },
    defaultOptions: [],
    create(context) {
        let hasReactImport = false;
        return {
            'ImportDeclaration[source.value="react"]': () => {
                hasReactImport = true;
            },
            'VariableDeclarator > Identifier > TSTypeAnnotation > TSTypeReference > TSQualifiedName': (node) => {
                if (!hasReactImport)
                    return;
                if (!notAllowed.includes(node.right.name))
                    return;
                context.report({
                    messageId: 'avoid-react-fc',
                    node: node.right
                });
            }
        };
    }
});
