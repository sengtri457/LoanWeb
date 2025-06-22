import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface loanType {
  no: number;
  principal: number;
  interest: number;
  total: number;
  status: string;
  crrDate: string;
}
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
  currentDate = new Date('2023-05-08');
  dateList: string[] = [];
  LoanList() {
    let rows: loanType[] = [];
    for (let i = 1; i <= this.duration; i++) {
      rows.push({
        no: i,
        principal: this.principal,
        interest: this.interest,
        total: this.total,
        status: this.StausCheck,
        crrDate: this.dateList[i - 1],
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

  Getdate() {
    const newDateFormate = new Date(this.currentDate.getTime());
    for (let i = 0; i < this.duration; i++) {
      newDateFormate.setMonth(this.currentDate.getMonth() + i);
      this.dateList.push(newDateFormate.toISOString().split('T')[0]);
    }
    console.log(this.dateList);
  }
  ngOnInit() {
    this.Getdate();
  }
}
