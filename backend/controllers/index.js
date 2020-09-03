const express = require("express"),
    router = express.Router(),
    path = require("path"),
    history = require("connect-history-api-fallback"),
    staticPages = express.static(path.resolve(__dirname, "../dist"));


router.use('/auth', require('./auth'));
router.use('/api', require('./api'));
/* register static pages with their own history */
router.use(staticPages);
//router.use(history({ disableDotRule: true }));
//router.use(staticPages);


/**
 * 404 for the pages that doesn't exist
 */
router.get("*", (req, res) => {
    /* TODO: change to static error html page */
    res.status(404).json({ msg: "The page doesn't exist" });
});

module.exports = router;