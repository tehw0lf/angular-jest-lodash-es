import nx from "@nx/eslint-plugin";
import globals from "globals";

export default [
    ...nx.configs["flat/base"],
    {
        files: [
            "**/*.ts",
            "**/*.tsx",
            "**/*.js",
            "**/*.jsx"
        ],
        rules: {
            "@nx/enforce-module-boundaries": [
                "error",
                {
                    enforceBuildableLibDependency: true,
                    allow: [],
                    depConstraints: [
                        {
                            sourceTag: "*",
                            onlyDependOnLibsWithTags: [
                                "*"
                            ]
                        }
                    ]
                }
            ]
        }
    },
    ...nx.configs["flat/typescript"],
    ...nx.configs["flat/javascript"],
    {
        files: [
            "**/*.spec.ts",
            "**/*.spec.tsx",
            "**/*.spec.js",
            "**/*.spec.jsx"
        ],
        languageOptions: {
            // Jest globals, previously set via eslintrc env.jest; converted to flat-native globals.
            globals: globals.jest
        }
    }
];
