const allPlatforms = Array.from(
  new Set(Object.values(window.profile).map((b) => b.platform))
);
const isArrayEqual = (a, b) => {
  return a.length === b.length && a.every((element) => b.includes(element));
};

document.addEventListener("alpine:init", () => {
  Alpine.store("devices", {
    fetching: false,
    ports: [],
    selected: {
      board: null,
      port: null,
    },
    installPlatform: [],
    boards: Object.values(window.profile).sort((a, b) =>
      a.category > b.category ? 1 : -1
    ),
    init() {
      this.readPrevSelect({board: true})
      listDevices({ showModal: false }).then(() => {
        this.readPrevSelect({port: true});
      });
      this.updatePlatformStatus();
    },
    updatePlatformStatus() {
      getInstalledPlatforms().then((platforms) => {
        this.installPlatform = platforms;
        console.log(this.installPlatform)
        if (!isArrayEqual(platforms, allPlatforms)) {
          setTimeout(() => this.updatePlatformStatus(), 5000);
        }
      });
    },
    readPrevSelect(config = {board: true, port: true}) {
      const prevBoard = localStorage.getItem(`selectedBoard`);
      if (config.board && prevBoard) {
        const board = this.boards.find((b) => b.name === prevBoard);
        board && this.select("board", board);
      }
      const prevPort = localStorage.getItem(`selectedPort`);
      if (config.port && prevPort) {
        const portDetail = this.ports.find((b) => b.port.label === prevPort);
        portDetail && this.select("port", portDetail.port);
      }
    },
    updateFetching(fetching = true) {
      this.fetching = fetching;
    },
    updatePorts(ports) {
      console.log(ports);
      this.ports = ports;
    },
    select(category = "board", val = null) {
      this.selected[category] = val;
      if (category === "board") {
        localStorage.setItem(`selectedBoard`, val.name);
      } else if (category === "port") {
        localStorage.setItem(`selectedPort`, val.label);
      }
    },
    isSelected(category = "board", val) {
      const part = this.selected[category];
      if (!part) return false;
      if (category === "board") {
        return val.name === part.name;
      } else if (category === "port") {
        return val.label === part.label;
      } else {
        throw new Error("invalid category");
      }
    },
    isPortAvailable(port) {
      return !!this.ports.find((d) => d.port.label === port.label);
    },
    onDeviceConfirm() {
      $("#device-select").modal("hide");
    },
  });

  Alpine.store("messages", {
    list: [],
    timerId: null,
    add(message) {
      if (!message.type) throw new Error("Message must have type");
      const updatedMessage = { duration: 3000, ...message };
      updatedMessage.timeoutAt =
        Date.now() + (updatedMessage.duration || +Infinity);
      this.list = [...this.list, updatedMessage];
      if (!this.timerId) {
        setInterval(() => {
          this.cleanUpTimeoutMessages.call(this);
        }, 1000);
      }
    },
    cleanUpTimeoutMessages() {
      if (!this.list.length) {
        return this.timerId && clearInterval(this.timerId);
      }
      const now = Date.now();
      const expiredMessageIndex = this.list.findIndex(
        (m) => m.timeoutAt <= now
      );
      if (expiredMessageIndex !== -1) {
        this.remove(expiredMessageIndex);
        return this.cleanUpTimeoutMessages();
      } else return null;
    },
    remove(index) {
      this.list = this.list.slice(0, index).concat(this.list.slice(index + 1));
    },
  });

  Alpine.store("processing", {
    category: null,
    setProcessing(category) {
      if (category !== null && !category)
        throw new Error("Category cannot be undefined");
      this.category = category;
    },
  });
});
