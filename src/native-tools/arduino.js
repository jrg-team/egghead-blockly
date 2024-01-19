const { spawn } = require('child_process');
module.exports = {
  'arduino.board.list': () => {
    return new Promise((resolve, reject) => {
      const arduinoProcess = spawn('arduino-cli', ['board', 'list', '--format', 'json']);
      arduinoProcess.stdout.on('data', (data) => resolve(data.toString('utf-8')))
      arduinoProcess.stderr.on('data', (data) => reject(data));
    })
  },
}