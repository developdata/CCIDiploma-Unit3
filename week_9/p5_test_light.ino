int buttonTwo = 2;
int buttonThree = 3;
int redLED = 9;

void setup() {
    pinMode(buttonTwo, INPUT);
    pinMode(buttonThree, INPUT);
    pinMode(redLED, OUTPUT);
  Serial.begin(9600);

}

void loop() {
  
  digitalWrite(redLED, HIGH); 
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