/*
  Two buttons 
  and concatination of text and data
  */

int buttonTwo = 2;
int buttonThree = 3;

void setup() {
    pinMode(buttonTwo, INPUT);
    pinMode(buttonThree, INPUT);
    Serial.begin(9600);
}

void loop() {
  Serial.println((String)"button connected to 2: " + digitalRead(buttonTwo));
  Serial.println((String)"button connected to 3: " + digitalRead(ButtonThree));
  delay(500);
}