module.exports = {
  packagerConfig: {
    asar: true,
    icon: "./src/media/app-icon",
    extraResource: ["./compilation/bin", "./compilation/arduino"],
  },
  rebuildConfig: {},
  makers: [
    // {
    //   name: '@electron-forge/maker-wix',
    //   config: {
    //     language: 1033,
    //     manufacturer: '蛋头实验室 Egghead Lab'
    //   }
    // },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin", "win32"],
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
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'jrg-team',
          name: 'egghead-blockly'
        },
        prerelease: true
      }
    }
  ],
  fileAssociations: {
    ext: "bloc",
    name: "BLOC file",
    role: "Editor",
    description: "蛋头实验室Blockly 文件",
  },
};
