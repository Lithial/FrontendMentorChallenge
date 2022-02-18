const plugins = []
//react fast refresh only in dev
if (process.env.NODE_ENV !== "production") {
    plugins.push("react-refresh/babel");
}

module.exports = {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }]
    ],
    plugins: plugins
}
