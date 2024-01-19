document.addEventListener('alpine:init', () => {
  Alpine.store('serialportDevices', {
      devices: [],
      update(devices) {
          this.devices = devices
      }
  })
})