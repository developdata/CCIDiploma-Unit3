int buttonTwo = 2;
int buttonThree = 3;

void setup() {
    pinMode(buttonTwo, INPUT);
    pinMode(buttonThree, INPUT);
  Serial.begin(9600);

}

void loop() {
  

  if(digitalRead(buttonTwo) == 1 && digitalRead(buttonThree)== 1){
    Serial.println("both");
  }
  else if(digitalRead(buttonTwo) == 1){
    Serial.println(2);
  }
  else if(digitalRead(buttonThree) == 1){
    Serial.println(3);
  }

  delay(300);
}