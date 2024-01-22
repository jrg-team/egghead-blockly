const getStores = () => {
  return {
    deviceStore: Alpine.store("devices"),
    messageStore: Alpine.store("messages"),
    processingStore: Alpine.store("processing"),
  };
};

const toPlainObject = (alpineObj) => JSON.parse(JSON.stringify(alpineObj));

function listDevices() {
  const store = Alpine.store("devices");
  store.updateFetching(true);
  $("#device-select").modal("show");
  window.arduinoApi["arduino.board.list"]()
    .then((strings) => {
      const ports = JSON.parse(strings);
      store.updatePorts(ports);
    })
    .finally(() => {
      store.updateFetching(false);
    });
}

function verifyCode() {
  const { deviceStore, messageStore, processingStore } = getStores();
  if (processingStore.category) return;
  if (!deviceStore.selected.board) {
    messageStore.add({
      type: "error",
      title: "验证失败",
      content:
        '验证代码至少需要在【选择设备】界面中选择<strong class="color-font">开发板</strong>',
    });
    return listDevices();
  }
  const code =
    localStorage.getItem("content") == "off"
      ? editor.getValue()
      : $("#pre_previewArduino").text();

  processingStore.setProcessing("verify");
  window.arduinoApi["arduino.code.verify"]({
    code,
    board: toPlainObject(deviceStore.selected.board),
  })
    .then(
      (result) => {
        if (result.success) {
          messageStore.add({
            type: "success",
            title: "验证成功",
            content: "代码验证成功！",
          });
        } else {
          messageStore.add({
            type: "error",
            title: result.error,
            content: `<code style="font-size: 12px">${result.compiler_err}</code>`,
            duration: 0,
          });
        }
      },
      (e) => {
        messageStore.add({
          type: "error",
          title: "验证失败",
          content: "请稍后重试",
        });
      }
    )
    .finally(() => {
      processingStore.setProcessing(null);
    });
}

function uploadCode() {
  const { deviceStore, messageStore, processingStore } = getStores();
  if (processingStore.category) return;

  if (!deviceStore.selected.board || !deviceStore.selected.port) {
    messageStore.add({
      type: "error",
      title: "烧录失败",
      content:
        '烧录代码 需要在【选择设备】界面中选择<strong class="color-font">开发板</strong>和<strong class="color-font">端口</strong>',
    });
    return listDevices();
  }
  if (!deviceStore.isPortAvailable(deviceStore.selected.port)) {
    messageStore.add({
      type: "error",
      title: "烧录失败",
      content: "没有搜寻到选中的端口，请检查连接",
    });
    return $("#device-select").modal("show");
  }
  processingStore.setProcessing("upload");

  const code = $("#pre_previewArduino").text();

  window.arduinoApi["arduino.code.verify"]({
    code,
    board: toPlainObject(deviceStore.selected.board),
    port: toPlainObject(deviceStore.selected.port),
  })
    .then(
      (r) => console.log(r),
      (e) => {
        console.error(e);
        messageStore.add({
          type: "error",
          title: "烧录失败",
          content: "请稍后重试",
        });
      }
    )
    .finally(() => {
      processingStore.setProcessing(null);
    });
}

function copyCode() {
  const { messageStore } = getStores();
  window.arduinoApi["arduino.code.copy"]($("#pre_previewArduino").text());
  messageStore.add({
    type: "success",
    title: "已复制",
    content: "代码已复制到剪贴板",
  });
}
