#include <SPI.h>

#include <Adafruit_GFX.h>

#include <Adafruit_ST7735.h>

#include <avr/pgmspace.h>


int tiempo_delay = 50;
int cont = 0;

Adafruit_ST7735 tft1 = Adafruit_ST7735(2, 2, 2);

const unsigned char Frame1[] PROGMEM = {
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xff,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xf8,
  0x00,
  0x00,
  0x00,
  0x00,
  0xfe,
  0x00,
  0x00,
  0x00,
  0x00,
  0x1e,
  0x00,
  0x00,
  0x00,
  0x01,
  0x83,
  0x80,
  0x00,
  0x00,
  0x00,
  0x07,
  0x00,
  0x00,
  0x00,
  0x03,
  0x00,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x01,
  0xc0,
  0x00,
  0x00,
  0x03,
  0x0c,
  0x40,
  0x00,
  0x00,
  0x00,
  0x00,
  0xff,
  0xff,
  0xff,
  0xe1,
  0x0c,
  0x60,
  0x00,
  0x00,
  0x00,
  0x00,
  0xf0,
  0x00,
  0x1f,
  0xff,
  0x80,
  0x20,
  0x00,
  0x00,
  0x00,
  0x01,
  0xe0,
  0x00,
  0x01,
  0xf9,
  0xe0,
  0x20,
  0x00,
  0x00,
  0x00,
  0x03,
  0xc0,
  0x00,
  0x00,
  0xcc,
  0x78,
  0x60,
  0x00,
  0x00,
  0x03,
  0xe7,
  0x80,
  0x00,
  0x00,
  0x64,
  0x1f,
  0xc0,
  0x00,
  0x00,
  0x0e,
  0xff,
  0x00,
  0x00,
  0x00,
  0x66,
  0x00,
  0x00,
  0x00,
  0x00,
  0x1c,
  0x0e,
  0x00,
  0x00,
  0x00,
  0x33,
  0xf0,
  0x00,
  0x00,
  0x00,
  0x30,
  0xf8,
  0x00,
  0x00,
  0x00,
  0x18,
  0x1f,
  0xf0,
  0x00,
  0x00,
  0x7f,
  0xf0,
  0x00,
  0x00,
  0x00,
  0x08,
  0x00,
  0x00,
  0x00,
  0x01,
  0xfc,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x00,
  0x00,
  0x00,
  0x03,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x06,
  0x00,
  0x00,
  0x00,
  0x07,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x00,
  0x00,
  0x00,
  0x0e,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0x86,
  0x00,
  0x00,
  0x0c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xcc,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x78,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00
};

const unsigned char Frame2[] PROGMEM = {
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x3f,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x70,
  0xf8,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x3c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0e,
  0x00,
  0x00,
  0x00,
  0x03,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x80,
  0x00,
  0x00,
  0x0f,
  0xf0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0xc0,
  0x00,
  0x00,
  0x08,
  0x18,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xe0,
  0x00,
  0x00,
  0x18,
  0x0c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xfe,
  0x00,
  0x00,
  0x18,
  0x66,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xdf,
  0xf8,
  0x00,
  0x08,
  0x66,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0xb8,
  0xff,
  0xff,
  0xfc,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0xb0,
  0x01,
  0xfe,
  0x06,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x60,
  0x00,
  0x32,
  0x03,
  0x86,
  0x00,
  0x00,
  0x00,
  0x03,
  0xff,
  0xc0,
  0x00,
  0x33,
  0x80,
  0xfc,
  0x00,
  0x00,
  0x00,
  0x07,
  0x07,
  0x80,
  0x00,
  0x10,
  0xe0,
  0x01,
  0x00,
  0x00,
  0x00,
  0x7f,
  0xff,
  0x00,
  0x00,
  0x10,
  0x38,
  0x03,
  0x00,
  0x00,
  0x00,
  0x7f,
  0xfe,
  0x00,
  0x00,
  0x18,
  0x0f,
  0x86,
  0x00,
  0x00,
  0x00,
  0xc8,
  0x00,
  0x00,
  0x00,
  0x08,
  0x00,
  0xfc,
  0x00,
  0x00,
  0x01,
  0x80,
  0x00,
  0x00,
  0x00,
  0x08,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x04,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x06,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x06,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0x8c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xf8,
  0x00,
  0x00,
  0x00
};

const unsigned char Frame3[] PROGMEM = {
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xfe,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0f,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0xe0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x70,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x3c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0e,
  0x00,
  0x00,
  0x07,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x07,
  0x80,
  0x00,
  0x0c,
  0x30,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0xc0,
  0x00,
  0x10,
  0x08,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x02,
  0xf0,
  0x00,
  0x10,
  0x04,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x02,
  0xbe,
  0x00,
  0x18,
  0x66,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x07,
  0x87,
  0xc0,
  0x08,
  0x62,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x05,
  0x00,
  0xff,
  0xfc,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x05,
  0x00,
  0x1f,
  0x06,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0e,
  0x00,
  0x09,
  0x03,
  0x86,
  0x00,
  0x00,
  0x00,
  0x00,
  0x3f,
  0xfe,
  0x00,
  0x09,
  0x00,
  0xfc,
  0x00,
  0x00,
  0x00,
  0x00,
  0x6f,
  0xfc,
  0x00,
  0x19,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x58,
  0x00,
  0x00,
  0x10,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xe0,
  0x00,
  0x00,
  0x10,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xc0,
  0x00,
  0x00,
  0x30,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0x80,
  0x00,
  0x00,
  0x20,
  0x70,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x20,
  0x1c,
  0x60,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x60,
  0x07,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x40,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x40,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x6e,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x30,
  0x00,
  0x00,
  0x00,
  0x00
};

const unsigned char Frame4[] PROGMEM = {
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xe0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x38,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0e,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x80,
  0x00,
  0x07,
  0xe0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xf0,
  0x00,
  0x0c,
  0x38,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x3f,
  0x00,
  0x18,
  0x0c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0f,
  0xe0,
  0x10,
  0x66,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x3e,
  0x10,
  0x62,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x07,
  0xf0,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0e,
  0x00,
  0xd8,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0a,
  0x03,
  0xce,
  0x06,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0a,
  0x06,
  0x83,
  0x84,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x7e,
  0x0d,
  0x80,
  0x78,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0xcc,
  0x39,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0xf8,
  0x61,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0f,
  0x80,
  0xc3,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x09,
  0x03,
  0x82,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x06,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x38,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x70,
  0x03,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x60,
  0x01,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x78,
  0x00,
  0xe0,
  0x00,
  0x00,
  0x00
};

const unsigned char Frame5[] PROGMEM = {
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x08,
  0x00,
  0x00,
  0x00,
  0x03,
  0xf8,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x00,
  0x00,
  0xff,
  0x0c,
  0x06,
  0x00,
  0x00,
  0x00,
  0x00,
  0x04,
  0x00,
  0x03,
  0x83,
  0xc8,
  0x03,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x00,
  0x06,
  0x00,
  0xf8,
  0x19,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0xc0,
  0x0c,
  0x00,
  0xd8,
  0x19,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x70,
  0x18,
  0x00,
  0x88,
  0x00,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x1f,
  0xf8,
  0x00,
  0x8e,
  0x00,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x1c,
  0x01,
  0x83,
  0x07,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0f,
  0x01,
  0x00,
  0xfc,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x07,
  0xc7,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x02,
  0x5e,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x56,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0x76,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0xe4,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0x8c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x08,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x06,
  0x08,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x04,
  0x08,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x08,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x08,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00
};

const unsigned char Frame6[] PROGMEM = {
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x3f,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x61,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x80,
  0x60,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0x00,
  0x30,
  0xff,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x02,
  0x00,
  0x19,
  0x81,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x02,
  0x00,
  0x1f,
  0x00,
  0x60,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x06,
  0x00,
  0x7e,
  0x06,
  0x20,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x04,
  0x00,
  0xd2,
  0x06,
  0x20,
  0x00,
  0x00,
  0x00,
  0x10,
  0x00,
  0x08,
  0x01,
  0x92,
  0x00,
  0x60,
  0x00,
  0x00,
  0x00,
  0x10,
  0x00,
  0x08,
  0x01,
  0x33,
  0x00,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x18,
  0x00,
  0x18,
  0x03,
  0x61,
  0xe3,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x00,
  0x10,
  0x03,
  0xc0,
  0x3c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x06,
  0x00,
  0x1f,
  0x86,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x00,
  0x7c,
  0xfe,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0xc1,
  0xc7,
  0xe5,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x7f,
  0x80,
  0x3f,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x1b,
  0x99,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x3e,
  0xf3,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x37,
  0xc6,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xdb,
  0xec,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xf0,
  0xb8,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0x60,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x40,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00
};

const unsigned char Frame7[] PROGMEM = {
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x3f,
  0xe0,
  0x7f,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xe0,
  0x79,
  0x80,
  0x40,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0xc0,
  0x1d,
  0x00,
  0x20,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x00,
  0x3f,
  0x03,
  0x10,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x06,
  0x00,
  0x67,
  0x03,
  0x10,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x00,
  0xc5,
  0x80,
  0x10,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x08,
  0x01,
  0x84,
  0xc0,
  0x60,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x18,
  0x03,
  0x04,
  0x7f,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x30,
  0x02,
  0x04,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xc0,
  0x00,
  0x30,
  0x01,
  0x04,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x70,
  0x00,
  0xf0,
  0x01,
  0x04,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x1f,
  0x0f,
  0xfc,
  0x01,
  0x8c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0xf8,
  0x3e,
  0x00,
  0x88,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x37,
  0x00,
  0x98,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x21,
  0x03,
  0x10,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x21,
  0x86,
  0x60,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x20,
  0xc0,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x30,
  0x43,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x13,
  0x60,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0e,
  0x32,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x1c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00
};

const unsigned char Frame8[] PROGMEM = {
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x07,
  0xf0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x08,
  0x0c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x18,
  0x06,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x10,
  0x62,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xff,
  0xf0,
  0x61,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0xe3,
  0x30,
  0x03,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x1f,
  0x04,
  0x18,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x70,
  0x18,
  0x1f,
  0xfc,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0xc0,
  0x60,
  0x06,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0f,
  0x00,
  0xc0,
  0x01,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x00,
  0xe0,
  0x00,
  0x80,
  0x00,
  0x00,
  0x00,
  0x03,
  0xff,
  0xf8,
  0x00,
  0x38,
  0x01,
  0x80,
  0x00,
  0x00,
  0x00,
  0x1e,
  0x00,
  0xf0,
  0x00,
  0x1e,
  0x01,
  0x00,
  0x00,
  0x00,
  0x00,
  0x78,
  0x01,
  0xf0,
  0x00,
  0x03,
  0xc3,
  0x00,
  0x00,
  0x00,
  0x00,
  0xc0,
  0x03,
  0x30,
  0x00,
  0x00,
  0x82,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x06,
  0x30,
  0x00,
  0x01,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x20,
  0x00,
  0x06,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x18,
  0x20,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x30,
  0x20,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0xe0,
  0x20,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x80,
  0x20,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x02,
  0x00,
  0x20,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x00,
  0x20,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x38,
  0x00,
  0x20,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x20,
  0x00,
  0x20,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x20,
  0x00,
  0x20,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x3f,
  0x00,
  0x3f,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00
};

const unsigned char Frame9[] PROGMEM = {
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0f,
  0xf0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x18,
  0x08,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x10,
  0x04,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x10,
  0x32,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x7f,
  0xff,
  0xf8,
  0x32,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x07,
  0xe0,
  0x03,
  0x88,
  0x02,
  0x00,
  0x00,
  0x01,
  0xff,
  0x00,
  0x3e,
  0x00,
  0x02,
  0xc4,
  0x02,
  0x00,
  0x00,
  0x0f,
  0x01,
  0xf8,
  0xe0,
  0x00,
  0x06,
  0x62,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x1f,
  0xc0,
  0x00,
  0x04,
  0x39,
  0xfc,
  0x00,
  0x00,
  0x00,
  0x00,
  0x07,
  0x00,
  0x00,
  0x0c,
  0x0e,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x1e,
  0x00,
  0x00,
  0x07,
  0xc1,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x3c,
  0x00,
  0x00,
  0x00,
  0x78,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0x6c,
  0x00,
  0x00,
  0x00,
  0x0f,
  0x80,
  0x00,
  0x00,
  0x00,
  0x00,
  0xc8,
  0x00,
  0x00,
  0x00,
  0x01,
  0x40,
  0x00,
  0x00,
  0x00,
  0x03,
  0x98,
  0x00,
  0x00,
  0x00,
  0x01,
  0x40,
  0x00,
  0x00,
  0x00,
  0x0e,
  0x30,
  0x00,
  0x00,
  0x00,
  0x01,
  0x60,
  0x00,
  0x00,
  0x00,
  0xf8,
  0x60,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0x81,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0x03,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0x06,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x04,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x04,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00
};

const unsigned char Frame10[] PROGMEM = {
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0xe0,
  0x00,
  0x00,
  0x7f,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x18,
  0x00,
  0x00,
  0x00,
  0x78,
  0x00,
  0x00,
  0x00,
  0x00,
  0x08,
  0x04,
  0x00,
  0x00,
  0x00,
  0x1e,
  0x00,
  0x1f,
  0xff,
  0xf0,
  0x10,
  0x62,
  0x00,
  0x00,
  0x00,
  0x03,
  0xc1,
  0xf8,
  0x00,
  0x1f,
  0xf8,
  0x62,
  0x00,
  0x00,
  0x00,
  0x00,
  0x7f,
  0x00,
  0x00,
  0x01,
  0xd8,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0x78,
  0x00,
  0x00,
  0x00,
  0xc4,
  0x02,
  0x00,
  0x00,
  0x00,
  0x00,
  0xe0,
  0x00,
  0x00,
  0x00,
  0x63,
  0x84,
  0x00,
  0x00,
  0x00,
  0x01,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x70,
  0xf8,
  0x00,
  0x00,
  0x03,
  0xff,
  0x80,
  0x00,
  0x00,
  0x00,
  0x0c,
  0xc0,
  0x00,
  0x00,
  0x1c,
  0x06,
  0x00,
  0x00,
  0x00,
  0x00,
  0x06,
  0x3e,
  0x00,
  0x00,
  0x30,
  0x1c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x03,
  0x01,
  0x80,
  0x00,
  0x00,
  0x70,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
  0x80,
  0x40,
  0x00,
  0x03,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x40,
  0x40,
  0x00,
  0x0e,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x30,
  0x00,
  0x00,
  0x78,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x1c,
  0x00,
  0x03,
  0xc0,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x06,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x0c,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x08,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00
};

void setup() {
  tft1.initR(INITR_MINI160x80);

  tft1.setRotation(1);
  tft1.fillScreen(ST7735_BLACK);

}

void loop() {
  for (cont = -80; cont <= 180; cont += 5) {
    tft1.drawBitmap(cont, 0, Frame1, 80, 32, ST7735_WHITE);
    delay(tiempo_delay);
    tft1.drawBitmap(cont, 0, Frame1, 80, 32, ST7735_BLACK);
    tft1.drawBitmap(cont, 0, Frame2, 80, 32, ST7735_WHITE);
    delay(tiempo_delay);
    tft1.drawBitmap(cont, 0, Frame2, 80, 32, ST7735_BLACK);
    tft1.drawBitmap(cont, 0, Frame3, 80, 32, ST7735_WHITE);
    delay(tiempo_delay);
    tft1.drawBitmap(cont, 0, Frame3, 80, 32, ST7735_BLACK);
    tft1.drawBitmap(cont, 0, Frame4, 80, 32, ST7735_WHITE);
    delay(tiempo_delay);
    tft1.drawBitmap(cont, 0, Frame4, 80, 32, ST7735_BLACK);
    tft1.drawBitmap(cont, 0, Frame5, 80, 32, ST7735_WHITE);
    delay(tiempo_delay);
    tft1.drawBitmap(cont, 0, Frame5, 80, 32, ST7735_BLACK);
    tft1.drawBitmap(cont, 0, Frame6, 80, 32, ST7735_WHITE);
    delay(tiempo_delay);
    tft1.drawBitmap(cont, 0, Frame6, 80, 32, ST7735_BLACK);
    tft1.drawBitmap(cont, 0, Frame7, 80, 32, ST7735_WHITE);
    delay(tiempo_delay);
    tft1.drawBitmap(cont, 0, Frame7, 80, 32, ST7735_BLACK);
    tft1.drawBitmap(cont, 0, Frame8, 80, 32, ST7735_WHITE);
    delay(tiempo_delay);
    tft1.drawBitmap(cont, 0, Frame8, 80, 32, ST7735_BLACK);
    tft1.drawBitmap(cont, 0, Frame9, 80, 32, ST7735_WHITE);
    delay(tiempo_delay);
    tft1.drawBitmap(cont, 0, Frame9, 80, 32, ST7735_BLACK);
    tft1.drawBitmap(cont, 0, Frame10, 80, 32, ST7735_WHITE);
    delay(tiempo_delay);
    tft1.drawBitmap(cont, 0, Frame10, 80, 32, ST7735_BLACK);
  }

}