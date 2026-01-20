/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{njk,md,html}", "!./_site/**/*"],
    theme: {
        extend: {
            colors: {
                'tahoma-blue': '#004a99',
                'tahoma-gold': '#ffcc00',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
