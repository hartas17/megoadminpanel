float val1 = 0;


void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  val1 = random(1,100);

  Serial.print(val1);
  
  Serial.println();

  delay(1000);
}
