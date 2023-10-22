import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: "#ff8500"
            }
        }
    },
    content: [
        'components/**/*.{vue,js,ts}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'composables/**/*.{js,ts}',
        'plugins/**/*.{js,ts}',
        'App.{js,ts,vue}',
        'app.{js,ts,vue}',
        'Error.{js,ts,vue}',
        'error.{js,ts,vue}',
        'content/**/*.md'
    ],
    safelist: [
        {
            pattern: /grid-cols-(2|3|4|6)/,
            variants: ['lg']
        },
        "text-primary",
    ],
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.text-stroke-thin': {
                    '-webkit-text-stroke': 'thin',
                }
            })
        })
    ]
}
