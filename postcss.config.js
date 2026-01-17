module.exports = {
    plugins: [
        require('@tailwindcss/postcss'),
        require('autoprefixer'),
        require('postcss-preset-env')({
            stage: 2,
            features: {
                'nesting-rules': true,
                'custom-properties': true,
                'custom-media-queries': true,
            },
        }),
    ],
};
