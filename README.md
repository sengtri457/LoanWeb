# LoanSystem

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.0.



# Loan Schedule

This project contains a visual representation of a loan repayment schedule in table format. The table is styled and formatted in Khmer and outlines payment details for a loan taken on **May 8, 2023**.

## Overview

- **Loan Amount**: $2000  
- **Interest Rate**: 2%  
- **Term**: 10 months  
- **Monthly Payment**: $240 (includes principal + interest)  
- **Start Date**: 2023-05-08  
- **End Date**: 2025-02-08 (final payment)

## Table Breakdown

Each row in the table shows the following:

- **Month Number (ល.រ)**: Payment installment number  
- **Principal Paid (ដើមទឹកប្រាក់)**: Fixed amount of $200 paid monthly  
- **Interest (ការប្រាក់)**: Fixed $40 monthly interest  
- **Total Payment (ទឹកប្រាក់សរុប)**: $240 per month  
- **Payment Date (កាលបរិច្ឆេទ)**: Scheduled date for each installment

At the bottom of the table:
- **Total Interest** over 10 months: $400  
- **Total Paid**: $2400 (Principal + Interest)

## Notes

- The repayment is split into equal parts over 10 months.
- Interest is calculated monthly and does not change.
- This layout is useful for personal loan planning or creating similar schedules for financial tracking.

## Preview

You can view the schedule in the included image:  
![Loan Schedule](./ef2eae8e-c8b8-46bb-a15a-24c45f506f03.png)

---

Feel free to customize this `README.md` for your exact use case or add extra features like CSV exports, charts, or interactivity later.



## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
