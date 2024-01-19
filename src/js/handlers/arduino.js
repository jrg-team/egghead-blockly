function listDevices() {
  window.arduinoApi["arduino.board.list"]().then((strings) => {
    const deviceList = JSON.parse(strings)
    Alpine.store('serialportDevices').update(deviceList)
  });
}
