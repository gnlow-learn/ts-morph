import * as ts from "jsr:@ts-morph/ts-morph@27.0.0"

const project = new ts.Project()

const sourceFile = project.createSourceFile("hello.ts")

sourceFile.addVariableStatement({
    declarationKind: ts.VariableDeclarationKind.Const,
    declarations: [
        {
            name: "a",
            type: "string",
            initializer: `"Hello, World!"`,
        },
    ],
})

console.log(sourceFile.getFullText())
