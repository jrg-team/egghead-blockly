module.exports = {
  packagerConfig: {
    asar: true,
    icon: "./src/media/app-icon",
    extraResource: ["./compilation/bin", "./compilation/arduino"],
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        iconUrl: "https://sciteen.oss-cn-hangzhou.aliyuncs.com/app-icon.ico",
        // The ICO file to use as the icon for the generated Setup.exe
        setupIcon: "./src/media/app-icon.ico",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
      config: {
        icon: "./src/media/app-icon.png",
      },
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          icon: "./src/media/app-icon.png",
        },
      },
    },
    {
      name: "@electron-forge/maker-dmg",
      config: {
        format: "ULFO",
        icon: "./src/media/app-icon.icns",
      },
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
  fileAssociations: {
    ext: "bloc",
    name: "BLOC file",
    role: "Editor",
    description: "蛋头实验室Blockly 文件",
  },
};
