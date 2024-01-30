#include <CuteBuzzerSounds.h>


const int buzzer = 5;

void setup() {
  pinMode(5, OUTPUT);
  cute.init(buzzer);

  cute.play(S_connection);

}

void loop() {
  cute.play(S_superHappy);
  cute.play(S_happy);
  cute.play(S_happy_short);
  cute.play(S_sad);
  cute.play(S_confused);
  cute.play(S_cuddly);
  cute.play(S_OhOoh);
  cute.play(S_OhOoh2);
  cute.play(S_surprise);
  cute.play(S_buttonPushed);
  cute.play(S_fart1);
  cute.play(S_sleeping);
  cute.play(S_disconnection);

}