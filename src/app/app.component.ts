import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    console.log('Button was clicked     this.includeLetters=', this.includeLetters);
    this.password = "My Password";
    console.log(`
      About to generate password:
        - Include letters: ${this.includeLetters}
        - Include numbers: ${this.includeNumbers}
        - Include symbols: ${this.includeSymbols}
    `);
  }

  onLengthChange() {
    console.log('In onLengthChange    change was detected');
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
