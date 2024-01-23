﻿"use strict";

goog.provide("Blockly.Arduino");
goog.require("Blockly.Generator");

window.profile = {
  nanooptiboot: {
    name: "Arduino Nano",
    category: "Arduino",
    BUILTIN_LED: 13,
    picture:
      "media/nano-new.png",
    dropdownAllPins: [
      ["2", "2"],
      ["3", "3"],
      ["4", "4"],
      ["5", "5"],
      ["6", "6"],
      ["7", "7"],
      ["8", "8"],
      ["9", "9"],
      ["10", "10"],
      ["11", "11"],
      ["12", "12"],
      ["13", "13"],
      ["A0", "A0"],
      ["A1", "A1"],
      ["A2", "A2"],
      ["A3", "A3"],
      ["A4", "A4"],
      ["A5", "A5"],
      ["A6", "A6"],
      ["A7", "A7"],
    ],
    dropdownDigital: [
      ["2", "2"],
      ["3", "3"],
      ["4", "4"],
      ["5", "5"],
      ["6", "6"],
      ["7", "7"],
      ["8", "8"],
      ["9", "9"],
      ["10", "10"],
      ["11", "11"],
      ["12", "12"],
      ["13", "13"],
    ],
    dropdownPWM: [
      ["3", "3"],
      ["5", "5"],
      ["6", "6"],
      ["9", "9"],
      ["10", "10"],
      ["11", "11"],
    ],
    dropdownAnalog: [
      ["A0", "A0"],
      ["A1", "A1"],
      ["A2", "A2"],
      ["A3", "A3"],
      ["A4", "A4"],
      ["A5", "A5"],
      ["A6", "A6"],
      ["A7", "A7"],
    ],
    interrupt: [
      ["2", "2"],
      ["3", "3"],
    ],
    serial: [
      ["300", "300"],
      ["600", "600"],
      ["1200", "1200"],
      ["2400", "2400"],
      ["4800", "4800"],
      ["9600", "9600"],
      ["14400", "14400"],
      ["19200", "19200"],
      ["28800", "28800"],
      ["31250", "31250"],
      ["38400", "38400"],
      ["57600", "57600"],
      ["115200", "115200"],
    ],
    serialPin: [["Rx/Tx", "0"]],
    build: "nanooptiboot",
    upload_arg: "arduino:avr:nano",
    cpu: "atmega328p",
    speed: "115200",
    prog: "arduino",
    usb: "mini USB",
    voltage: "5V",
    inout: "20",
  },
  esp32: {
    name: "ESP32 Devkit",
    category: "ESP32",
    BUILTIN_LED: 2,
    picture:
      "media/DevKitC.png",
    dropdownPWM: [
      ["0", "0"],
      ["2", "2"],
      ["4", "4"],
      ["5", "5"],
      ["12", "12"],
      ["13", "13"],
      ["14", "14"],
      ["15", "15"],
    ],
    dropdownAnalog: [["A0", "A0"]],
    interrupt: [
      ["0", "0"],
      ["2", "2"],
      ["4", "4"],
      ["5", "5"],
      ["12", "12"],
      ["13", "13"],
      ["14", "14"],
      ["15", "15"],
    ],
    serial: [
      ["300", "300"],
      ["600", "600"],
      ["1200", "1200"],
      ["2400", "2400"],
      ["4800", "4800"],
      ["9600", "9600"],
      ["14400", "14400"],
      ["19200", "19200"],
      ["28800", "28800"],
      ["31250", "31250"],
      ["38400", "38400"],
      ["57600", "57600"],
      ["115200", "115200"],
    ],
    serialPin: [["Rx/Tx", "0"]],
    build: "",
    upload_arg: "esp32:esp32:esp32",
    cpu: "esp32",
    speed: "115200",
    prog: "arduino",
    usb: "micro USB",
    voltage: "3,3V",
    inout: "34",
  },
  esp32c3: {
    name: "AirMCU ESP32C3",
    category: "ESP32",
    BUILTIN_LED: 2,
    picture:
      "media/airmcu-esp32c3.png",
    dropdownPWM: [
      ["0", "0"],
      ["2", "2"],
      ["4", "4"],
      ["5", "5"],
      ["12", "12"],
      ["13", "13"],
      ["14", "14"],
      ["15", "15"],
    ],
    dropdownAnalog: [["A0", "A0"]],
    interrupt: [
      ["0", "0"],
      ["2", "2"],
      ["4", "4"],
      ["5", "5"],
      ["12", "12"],
      ["13", "13"],
      ["14", "14"],
      ["15", "15"],
    ],
    serial: [
      ["300", "300"],
      ["600", "600"],
      ["1200", "1200"],
      ["2400", "2400"],
      ["4800", "4800"],
      ["9600", "9600"],
      ["14400", "14400"],
      ["19200", "19200"],
      ["28800", "28800"],
      ["31250", "31250"],
      ["38400", "38400"],
      ["57600", "57600"],
      ["115200", "115200"],
    ],
    serialPin: [["Rx/Tx", "0"]],
    build: "",
    upload_arg: "esp32:esp32:AirM2M_CORE_ESP32C3",
    cpu: "esp32c3",
    speed: "115200",
    prog: "arduino",
    usb: "micro USB",
    voltage: "3,3V",
    inout: "34",
  },
  nano: {
    name: "Arduino Nano (Old Bootloader)",
    category: "Arduino",
    BUILTIN_LED: 13,
    picture: "media/nano.png",
    dropdownAllPins: [
      ["2", "2"],
      ["3", "3"],
      ["4", "4"],
      ["5", "5"],
      ["6", "6"],
      ["7", "7"],
      ["8", "8"],
      ["9", "9"],
      ["10", "10"],
      ["11", "11"],
      ["12", "12"],
      ["13", "13"],
      ["A0", "A0"],
      ["A1", "A1"],
      ["A2", "A2"],
      ["A3", "A3"],
      ["A4", "A4"],
      ["A5", "A5"],
      ["A6", "A6"],
      ["A7", "A7"],
    ],
    dropdownDigital: [
      ["2", "2"],
      ["3", "3"],
      ["4", "4"],
      ["5", "5"],
      ["6", "6"],
      ["7", "7"],
      ["8", "8"],
      ["9", "9"],
      ["10", "10"],
      ["11", "11"],
      ["12", "12"],
      ["13", "13"],
    ],
    dropdownPWM: [
      ["3", "3"],
      ["5", "5"],
      ["6", "6"],
      ["9", "9"],
      ["10", "10"],
      ["11", "11"],
    ],
    dropdownAnalog: [
      ["A0", "A0"],
      ["A1", "A1"],
      ["A2", "A2"],
      ["A3", "A3"],
      ["A4", "A4"],
      ["A5", "A5"],
      ["A6", "A6"],
      ["A7", "A7"],
    ],
    interrupt: [
      ["2", "2"],
      ["3", "3"],
    ],
    serial: [
      ["300", "300"],
      ["600", "600"],
      ["1200", "1200"],
      ["2400", "2400"],
      ["4800", "4800"],
      ["9600", "9600"],
      ["14400", "14400"],
      ["19200", "19200"],
      ["28800", "28800"],
      ["31250", "31250"],
      ["38400", "38400"],
      ["57600", "57600"],
      ["115200", "115200"],
    ],
    serialPin: [["Rx/Tx", "0"]],
    build: "nano",
    upload_arg: "arduino:avr:nano:cpu=atmega328old",
    cpu: "atmega328p",
    speed: "57600",
    prog: "arduino",
    usb: "mini USB",
    voltage: "5V",
    inout: "20",
  },

  uno: {
    name: "Arduino Uno",
    category: "Arduino",
    BUILTIN_LED: 13,
    picture: "media/uno.png",
    dropdownAllPins: [
      ["2", "2"],
      ["3", "3"],
      ["4", "4"],
      ["5", "5"],
      ["6", "6"],
      ["7", "7"],
      ["8", "8"],
      ["9", "9"],
      ["10", "10"],
      ["11", "11"],
      ["12", "12"],
      ["13", "13"],
      ["A0", "A0"],
      ["A1", "A1"],
      ["A2", "A2"],
      ["A3", "A3"],
      ["A4", "A4"],
      ["A5", "A5"],
      ["A6", "A6"],
      ["A7", "A7"],
    ],
    dropdownDigital: [
      ["2", "2"],
      ["3", "3"],
      ["4", "4"],
      ["5", "5"],
      ["6", "6"],
      ["7", "7"],
      ["8", "8"],
      ["9", "9"],
      ["10", "10"],
      ["11", "11"],
      ["12", "12"],
      ["13", "13"],
    ],
    dropdownPWM: [
      ["3", "3"],
      ["5", "5"],
      ["6", "6"],
      ["9", "9"],
      ["10", "10"],
      ["11", "11"],
    ],
    dropdownAnalog: [
      ["A0", "A0"],
      ["A1", "A1"],
      ["A2", "A2"],
      ["A3", "A3"],
      ["A4", "A4"],
      ["A5", "A5"],
      ["A6", "A6"],
      ["A7", "A7"],
    ],
    interrupt: [
      ["2", "2"],
      ["3", "3"],
    ],
    serial: [
      ["300", "300"],
      ["600", "600"],
      ["1200", "1200"],
      ["2400", "2400"],
      ["4800", "4800"],
      ["9600", "9600"],
      ["14400", "14400"],
      ["19200", "19200"],
      ["28800", "28800"],
      ["31250", "31250"],
      ["38400", "38400"],
      ["57600", "57600"],
      ["115200", "115200"],
    ],
    serialPin: [["Rx/Tx", "0"]],
    build: "uno",
    upload_arg: "arduino:avr:uno",
    cpu: "atmega328p",
    speed: "115200",
    prog: "arduino",
    usb: "USB B",
    voltage: "5V",
    inout: "18",
  },
  mega: {
    name: "Arduino Mega",
    category: "Arduino",
    BUILTIN_LED: 13,
    picture: "media/mega.png",
    dropdownAllPins: [
      ["2", "2"],
      ["3", "3"],
      ["4", "4"],
      ["5", "5"],
      ["6", "6"],
      ["7", "7"],
      ["8", "8"],
      ["9", "9"],
      ["10", "10"],
      ["11", "11"],
      ["12", "12"],
      ["13", "13"],
      ["14", "14"],
      ["15", "15"],
      ["16", "16"],
      ["17", "17"],
      ["18", "18"],
      ["19", "19"],
      ["20", "20"],
      ["21", "21"],
      ["22", "22"],
      ["23", "23"],
      ["24", "24"],
      ["25", "25"],
      ["26", "26"],
      ["27", "27"],
      ["28", "28"],
      ["29", "29"],
      ["30", "30"],
      ["31", "31"],
      ["32", "32"],
      ["33", "33"],
      ["34", "34"],
      ["35", "35"],
      ["36", "36"],
      ["37", "37"],
      ["38", "38"],
      ["39", "39"],
      ["40", "40"],
      ["41", "41"],
      ["42", "42"],
      ["43", "43"],
      ["44", "44"],
      ["45", "45"],
      ["46", "46"],
      ["47", "47"],
      ["48", "48"],
      ["49", "49"],
      ["50", "50"],
      ["51", "51"],
      ["52", "52"],
      ["53", "53"],
      ["54", "54"],
      ["55", "55"],
      ["56", "56"],
      ["57", "57"],
      ["58", "58"],
      ["59", "59"],
      ["60", "60"],
      ["61", "61"],
      ["62", "62"],
      ["63", "63"],
      ["64", "64"],
      ["65", "65"],
      ["66", "66"],
      ["67", "67"],
      ["68", "68"],
      ["69", "69"],
      ["A0", "A0"],
      ["A1", "A1"],
      ["A2", "A2"],
      ["A3", "A3"],
      ["A4", "A4"],
      ["A5", "A5"],
      ["A6", "A6"],
      ["A7", "A7"],
      ["A8", "A8"],
      ["A9", "A9"],
      ["A10", "A10"],
      ["A11", "A11"],
      ["A12", "A12"],
      ["A13", "A13"],
      ["A14", "A14"],
      ["A15", "A15"],
    ],
    dropdownDigital: [
      ["2", "2"],
      ["3", "3"],
      ["4", "4"],
      ["5", "5"],
      ["6", "6"],
      ["7", "7"],
      ["8", "8"],
      ["9", "9"],
      ["10", "10"],
      ["11", "11"],
      ["12", "12"],
      ["13", "13"],
      ["14", "14"],
      ["15", "15"],
      ["16", "16"],
      ["17", "17"],
      ["18", "18"],
      ["19", "19"],
      ["20", "20"],
      ["21", "21"],
      ["22", "22"],
      ["23", "23"],
      ["24", "24"],
      ["25", "25"],
      ["26", "26"],
      ["27", "27"],
      ["28", "28"],
      ["29", "29"],
      ["30", "30"],
      ["31", "31"],
      ["32", "32"],
      ["33", "33"],
      ["34", "34"],
      ["35", "35"],
      ["36", "36"],
      ["37", "37"],
      ["38", "38"],
      ["39", "39"],
      ["40", "40"],
      ["41", "41"],
      ["42", "42"],
      ["43", "43"],
      ["44", "44"],
      ["45", "45"],
      ["46", "46"],
      ["47", "47"],
      ["48", "48"],
      ["49", "49"],
      ["50", "50"],
      ["51", "51"],
      ["52", "52"],
      ["53", "53"],
      ["54", "54"],
      ["55", "55"],
      ["56", "56"],
      ["57", "57"],
      ["58", "58"],
      ["59", "59"],
      ["60", "60"],
      ["61", "61"],
      ["62", "62"],
      ["63", "63"],
      ["64", "64"],
      ["65", "65"],
      ["66", "66"],
      ["67", "67"],
      ["68", "68"],
      ["69", "69"],
    ],
    dropdownPWM: [
      ["2", "2"],
      ["3", "3"],
      ["4", "4"],
      ["5", "5"],
      ["6", "6"],
      ["7", "7"],
      ["8", "8"],
      ["9", "9"],
      ["10", "10"],
      ["11", "11"],
      ["12", "12"],
      ["13", "13"],
      ["44", "44"],
      ["45", "45"],
      ["46", "46"],
    ],
    dropdownAnalog: [
      ["A0", "A0"],
      ["A1", "A1"],
      ["A2", "A2"],
      ["A3", "A3"],
      ["A4", "A4"],
      ["A5", "A5"],
      ["A6", "A6"],
      ["A7", "A7"],
      ["A8", "A8"],
      ["A9", "A9"],
      ["A10", "A10"],
      ["A11", "A11"],
      ["A12", "A12"],
      ["A13", "A13"],
      ["A14", "A14"],
      ["A15", "A15"],
    ],
    interrupt: [
      ["21", "21"],
      ["20", "20"],
      ["19", "19"],
      ["18", "18"],
      ["6", "6"],
      ["7", "7"],
    ],
    serial: [
      ["300", "300"],
      ["600", "600"],
      ["1200", "1200"],
      ["2400", "2400"],
      ["4800", "4800"],
      ["9600", "9600"],
      ["14400", "14400"],
      ["19200", "19200"],
      ["28800", "28800"],
      ["31250", "31250"],
      ["38400", "38400"],
      ["57600", "57600"],
      ["115200", "115200"],
    ],
    serialPin: [
      ["Rx/Tx", "0"],
      ["Rx1/Tx1", "19"],
      ["Rx2/Tx2", "17"],
      ["Rx3/Tx3", "15"],
    ],
    build: "mega",
    upload_arg: "arduino:avr:mega:cpu=atmega2560",
    cpu: "atmega2560",
    speed: "115200",
    prog: "wiring",
    usb: "USB B",
    voltage: "5V",
    inout: "70",
  },
};
