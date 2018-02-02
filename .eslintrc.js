module.exports = {
    "extends": "airbnb",
    "plugins": [
        "import"
    ],
    "rules": {
        // windows linebreaks when not in production environment
        "linebreak-style": ["error", (require("os").EOL === "\r\n" ? "windows" : "unix")]
    }
};