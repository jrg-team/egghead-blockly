#include <Otto.h>

Otto Otto;

#define LeftLeg 2 // 左腿对应的引脚, 第一个舵机参数
#define RightLeg 3 // 右腿对应的引脚，第二个舵机参数
#define LeftFoot 4 // 左脚对应的引脚，第三个舵机参数
#define RightFoot 5 // 右脚对应的引脚，第四个舵机参数
#define Buzzer 13 // 蜂鸣器对应的引脚

void setup() {
  Otto.init(LeftLeg, RightLeg, LeftFoot, RightFoot, true, Buzzer);
  Otto.home();

  // Here is where your robot is configured, the servo pins connections and buzzer

}

void loop() {
  Otto.walk(1, 1000, 1); // FORWARD

}