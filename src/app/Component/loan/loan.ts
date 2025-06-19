import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loan',
  imports: [CommonModule],
  templateUrl: './loan.html',
  styleUrl: './loan.css',
})
export class Loan {
  price = 2000;
  duration = 10; // months
  interestRate = 2; // 2%
  totalPrice: number = 0;
  principal = this.price / this.duration;
  interest = (this.price * this.interestRate) / 100;
  total = this.principal + this.interest;
  StausCheck: string = 'active';
  DateTime = new Date();

  LoanList() {
    let rows = [];
    for (let i = 1; i <= this.duration; i++) {
      rows.push({
        no: i,
        principal: this.principal,
        interest: this.interest,
        total: this.total,
        status: this.StausCheck,
      });
    }
    return rows;
  }

  totalInterest() {
    let sum = 0;
    for (let index = 0; index < this.duration; index++) {
      sum += this.interest;
    }
    return sum;
  }

  grandTotal() {
    let totalEnd = 0;
    for (let index = 0; index < this.duration; index++) {
      totalEnd += this.total;
    }
    return totalEnd;
  }
}
