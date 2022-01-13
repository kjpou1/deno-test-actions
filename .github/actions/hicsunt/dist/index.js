/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core = required('@actions/core')
const github = required('@actions/github')

try {
    //throw( new Error("some eror message"));

    const name=core.getInput('who-to-greet');
    console.log(`Hic Sunt ${name}`)

    const time = new Date();
    core.setOutput("time", time.toTimetring())

    console.log(JSON.stringify(github, null, '\t'));

} catch (error)
{
    core.setFailed(error.message)
}
module.exports = __webpack_exports__;
/******/ })()
;