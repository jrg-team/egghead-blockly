document.addEventListener("alpine:init", () => {
  Alpine.store("monitor", {
    baudRate: 115200,
    portLabel: "",
    message: "",
    receiving: true,
    init() {
      const portLabel = parseParams("port");
      this.portLabel = portLabel;
      document.title = `串口监视器 ${this.portLabel}`;
    },
    sendMessage() {
      if (!this.message) return;
      window.monitor["serial.monitor.send"](this.message);
      window.messageList.innerHTML += this.message + "<br>";
      document.querySelector("#message-input").value = "";
      this.message = "";
      messageListStickBottom()
    },
    toggleReceive() {
      window.monitor["serial.monitor.toggle"]().then((receive) => {
        this.receiving = receive;
        const button = document.querySelector("#toggleReceive");
        if (receive) {
          window.messageList.innerHTML +=
            "----------- 打开串口 -----------<br>";
          button.innerHTML = "停止接收";
        } else {
          window.messageList.innerHTML +=
            "----------- 关闭串口 -----------<br>";
          button.innerHTML = "开始接收";
        }
      });
    },
    onMessageUpdate(e) {
      this.message = e.target.value;
    },
    onBaudRateUpdate(e) {
      const newBaudRate = Number(e.target.value);
      window.monitor["serial.monitor.changeBaudRate"](newBaudRate).then((b) =>
        console.log("BaudRate update success", newBaudRate)
      );
    },
  });
});

window.addEventListener("load", () => {
  window.messageList = document.querySelector("#messages-list");
  window.monitor["serial.monitor.onReceive"]((value) => {
    messageList.innerHTML += value.toString().replace(/\r?\n/g, "<br />");
    messageListStickBottom()
  });
});

function messageListStickBottom() {
  window.messageList.scrollTop = window.messageList.scrollHeight;
  window.messageList.animate({ scrollTop: window.messageList.scrollHeight });
}

function parseParams(key) {
  const val = location.search.match(new RegExp("[?&]" + key + "=([^&]+)"));
  return val ? decodeURIComponent(val[1].replace(/\+/g, "%20")) : null;
}

function saveMessages() {
  const code = document
    .querySelector("#messages-list")
    .innerHTML.split("<br>")
    .join("\n");
  const datenow = Math.round(Date.now() / 1000);
  const filename = `messages-${datenow}.txt`;
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(code)
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
