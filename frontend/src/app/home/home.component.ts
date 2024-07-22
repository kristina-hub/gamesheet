import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Variable to hold the text to be displayed
  displayText: string = '';

  // Method to update the displayText variable
  showText(text: string): void {
    this.displayText = text;
  }
}
