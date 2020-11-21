/*
  Analog data 
  */
int analogPin = A0;
int analogValue = 0;

void setup () 
{
 Serial.begin (9600);

}

void loop () 
{
     analogValue = analogRead(analogPin);
     Serial.println(analogValue);
     delay(500);
}