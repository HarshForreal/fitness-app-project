// bmi.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css'],
})
export class BmiComponent {
  weight: number = 100;
  height: number = 180;
  bmi: number = 0;
  bmiResult: string = '';

  calculateBMI() {
    // Convert height to meters
    const heightInMeters = this.height / 100;

    // Calculate BMI
    this.bmi = this.weight / (heightInMeters * heightInMeters);

    this.bmi = parseFloat(this.bmi.toFixed(2));

    // Determine BMI result
    if (this.bmi < 18.5) {
      this.bmiResult = 'Underweight';
    } else if (this.bmi < 25) {
      this.bmiResult = 'Normal weight';
    } else if (this.bmi < 30) {
      this.bmiResult = 'Overweight';
    } else {
      this.bmiResult = 'Obese';
    }
  }
}
