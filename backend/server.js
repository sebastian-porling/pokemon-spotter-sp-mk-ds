const express = require("express"),
    app = express(),
    cors = require("cors");

/* register logger and body parser */
app.use(require("./util/logger"));
app.use(express.json());

/* register routes and middleware */
app.use(cors());
app.use(require("./controllers"));

/**
 * Starts the server at the given port
 * @param port
 */
module.exports.start = (port) => {
    app.listen(port);
};
