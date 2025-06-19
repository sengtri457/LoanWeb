import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loan } from './Component/loan/loan';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loan],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'LoanSystem';
}
