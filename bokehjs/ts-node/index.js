const {register, TSError} = require("ts-node")
const chalk = require("chalk")

function prettyTSError(error) {
  const title = `${chalk.red('⨯')} Unable to compile TypeScript:`
  return `${chalk.bold(title)}\n${error.diagnostics.map((line) => line.message).join('\n')}`
}

process.on('uncaughtException', function(err) {
  if (err instanceof TSError) {
    console.error(prettyTSError(err))
    process.exit(1)
  } else
    throw err
})

module.exports = {register}
