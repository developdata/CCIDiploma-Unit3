int switchState = 0;
int previousState = 0;
void setup()
{
  pinMode(2, INPUT);
  Serial.begin(9600);
}
void loop()
{
  switchState = digitalRead(2);

  if(previousState != switchState){
    if(switchState == 1){
      Serial.println(switchState);
    }
  }
  previousState = switchState;
  delay(50);
}