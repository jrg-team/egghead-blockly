document.addEventListener('alpine:init', () => {
  Alpine.store('devices', {
    fetching: false,
    ports: [],
    selected: {
      board: null,
      port: null
    },
    boards: Object.values(window.profile).sort((a, b) => a.category > b.category ? 1 : -1),
    updateFetching(fetching = true) {
      this.fetching = fetching
    },
    updatePorts(ports) {
      console.log(ports)
      this.ports = ports
    },
    select(category = 'board', val = null) {
      this.selected[category] = val
    },
    isSelected(category = 'board', val) {
      const part = this.selected[category]
      if (!part) return false
      if (category === 'board') {
        return val.name === part.name
      } else if (category === 'port') {
        return val.label === part.label
      } else {
        throw new Error('invalid category')
      }
    },
    isPortAvailable(port) {
      console.log(port)
      console.log(this.ports)
      return !!this.ports.find(d => d.port.label === port.label)
    },
    onDeviceConfirm() {
      $("#device-select").modal("hide")
    }
  })


  Alpine.store('messages', {
    list: [],
    timerId: null,
    add(message) {
      if (!message.type) throw new Error('Message must have type')
      const updatedMessage = { duration: 3000, ...message }
      updatedMessage.timeoutAt = Date.now() + (updatedMessage.duration || +Infinity)
      this.list = [...this.list, updatedMessage]
      if (!this.timerId) {
        setInterval(() => {
          this.cleanUpTimeoutMessages.call(this)
        }, 1000);
      }
    },
    cleanUpTimeoutMessages() {
      if (!this.list.length) {
        return this.timerId && clearInterval(this.timerId)
      }
      const now = Date.now()
      const expiredMessageIndex = this.list.findIndex(m => m.timeoutAt <= now)
      if (expiredMessageIndex !== -1) {
        this.remove(expiredMessageIndex)
        return this.cleanUpTimeoutMessages()
      } else return null
    },
    remove(index) {
      this.list = this.list.slice(0, index).concat(this.list.slice(index + 1));
    }
  })

  Alpine.store('processing', {
    category: null,
    setProcessing(category) {
      if (category!== null && !category) throw new Error('Category cannot be undefined')
      this.category = category
    }
  })
})