const {colors} = require('@mitchreece/theme-variables')

module.exports = [
    {
        name: "Comments",
        scope: [
            "comment",
        ],
        settings: {
            foreground: `${colors.secondary}85`,
            fontStyle: 'italic',
        }
    },
    {
        scope: [
            "variable",
            "variable.parameter",
            "variable.function",
            "storage.modifier",
        ],
        settings: {
            foreground: '#B39DDB',
        }
    },
    {
        scope: [
            "storage.type",
        ],
        settings: {
            foreground: '#7E57C2',
        }
    },
    {
        scope: [
            "support",
            "variable.language",
        ],
        settings: {
            foreground: '#BA68C8',
        }
    }
]