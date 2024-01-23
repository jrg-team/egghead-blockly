#include <Adafruit_NeoPixel.h>

const int RgbPin = 6;
const int SingPin = 7;
float distance;
unsigned long Time_Echo_us = 0;

Adafruit_NeoPixel usrgb = Adafruit_NeoPixel(6, 6, NEO_GRB + NEO_KHZ800);
long ultrasound_distance() {
  long Time_Echo_us, distance;
  pinMode(7, OUTPUT);
  digitalWrite(7, LOW);
  delayMicroseconds(2);
  digitalWrite(7, HIGH);
  delayMicroseconds(20);
  digitalWrite(7, LOW);
  pinMode(7, INPUT);
  Time_Echo_us = pulseIn(7, HIGH);
  if ((Time_Echo_us < 60000) && (Time_Echo_us > 1)) {
    distance = Time_Echo_us / 58.00;
  }
  delay(200);
  return distance;
}

void setup() {
  Serial.begin(9600);

  pinMode(7, OUTPUT);

  usrgb.begin();
  usrgb.clear();
  usrgb.fill(usrgb.Color(0, 255, 255));
  usrgb.show();

}

void loop() {
  Serial.print("Ultrasonic sensor reading:");
  Serial.print(ultrasound_distance());
  Serial.print("cm");
  Serial.println("");

}