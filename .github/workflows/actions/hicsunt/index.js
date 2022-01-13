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