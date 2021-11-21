import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  password = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    console.log('Button was clicked');
    this.password = "";

    const numbers = "0123456789";
    const letters ="abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()_+";

    let validChars = "";
    if (this.includeLetters) {
      validChars += letters;
    } 
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i=0; i < this.length; i++){
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
      console.log("In generatedPassword for loop    randomIndex=",randomIndex,"   this.password=",this.password)
    }
    this.password = generatedPassword;

    console.log(`
      About to generate password:
        - Include letters: ${this.includeLetters}
        - Include numbers: ${this.includeNumbers}
        - Include symbols: ${this.includeSymbols}
        - validChars: ${validChars}
        - generatedPassword: ${generatedPassword}
    `);
  }

  onLengthChange(event: any) {
    const parsedValue = parseInt(event.target.value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    } else {
      this.length = 0;
    }
    console.log('In onLengthChange    change was detected    this.length=',this.length);
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    console.log('In onChangeUseLetters -- a change event was detected   this.includeLetters=', this.includeLetters); 
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
    console.log('In onChangeUseNumbers -- a change event was detected   this.includeNumbers=', this.includeNumbers); 
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
    console.log('In onChangeUseSymbols -- a change event was detected   this.includeSymbols=', this.includeSymbols); 
  }

}
