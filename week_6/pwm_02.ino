/*
  In this
  second PWM example a potentiometer is use to control the 
  brightness of an LED. As the value of the potentiometer
  goes from 0 to 1023 and the value for the LED goes from
  0 to 255 the map function is used to work out the correct
  value for the LED
  */

const int analogInPin = A0;  // Analog input pin that the potentiometer is attached to
const int pwmOutPin = 9; // Analog output pin that the LED is attached to

int potentiometerValue = 0;        // value read from the pot
int mappedValue = 0;        // value output to the PWM (analog out)

void setup() {
  Serial.begin(9600);
}

void loop() {

  potentiometerValue = analogRead(analogInPin);
  // map it to the range of the analog out:
  mappedValue = map(potentiometerValue, 0, 1023, 0, 255);
  // change the analog out value:
  analogWrite(pwmOutPin, mappedValue);

  // print the results to the serial monitor:
  Serial.print("sensor = ");
  Serial.print(potentiometerValue);
  Serial.print("\t output = ");
  Serial.println(mappedValue);

  delay(500);
}