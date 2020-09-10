const command = {
  name: 'stark',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to your CLI')
  }
}

module.exports = command
