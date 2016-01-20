const int pinMotor1 = 6;
const int pinMotor2 = 9;
const int pinMotor3 = 10;
const int pinMotor4 = 11;

void setup(){

Serial.begin(9600);
  pinMode(pinMotor1, OUTPUT);
  pinMode(pinMotor2, OUTPUT);
  pinMode(pinMotor3, OUTPUT);
  pinMode(pinMotor4, OUTPUT);
}
void loop(){
  int estadoMotor = Serial.read()- '0';
  bool finished = false;
  while(finished != true){
    switch(estadoMotor){
      case 0: Serial.println("Motores desactivados");
              digitalWrite (pinMotor1, LOW);
              digitalWrite (pinMotor2, LOW);
              digitalWrite (pinMotor3, LOW);
              digitalWrite (pinMotor4, LOW);
      case 1: Serial.println("Motor 1 activado");
              digitalWrite (pinMotor1, HIGH);
              digitalWrite (pinMotor2, LOW);
              digitalWrite (pinMotor3, LOW);
              digitalWrite (pinMotor4, LOW);
      case 2: Serial.println("Motor 2 activado");
              digitalWrite (pinMotor1, LOW);
              digitalWrite (pinMotor2, HIGH);
              digitalWrite (pinMotor3, LOW);
              digitalWrite (pinMotor4, LOW);
      case 3: Serial.println("Motor 3 activado");
              digitalWrite (pinMotor1, LOW);
              digitalWrite (pinMotor2, LOW);
              digitalWrite (pinMotor3, HIGH);
              digitalWrite (pinMotor4, LOW);
      case 4: Serial.println("Motor 4 activado");
              digitalWrite (pinMotor1, LOW); 
              digitalWrite (pinMotor2, LOW);
              digitalWrite (pinMotor3, LOW);
              digitalWrite (pinMotor4, HIGH);
      case 5: finished = true;
      default: Serial.println("INVALID");
    }
  }
}