       IDENTIFICATION DIVISION.                                         000100
       PROGRAM-ID. Payroll.

       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-HW   PIC 99V9(1).
       01 WS-HR     PIC 99V99.
       01 WS-GP      PIC 999V99.
       01 WS-DEDUCTIONS       PIC 999V99.
       01 WS-NP       PIC 999V99.
       01 DEDUCTION-RATE      PIC V9(2) VALUE 0.10.

       LINKAGE SECTION.
       01 LS-HW   PIC 99V9(1).
       01 LS-HR     PIC 99V99.
       01 LS-GP      PIC 999V99.
       01 LS-DEDUCTIONS       PIC 999V99.
       01 LS-NP       PIC 999V99.


       PROCEDURE DIVISION USING LS-HW LS-HR LS-GP LS-DEDUCTIONS LS-NP.
           MOVE LS-HW TO WS-HW.
           MOVE LS-HR TO WS-HR.
           COMPUTE WS-GP = WS-HW * WS-HR.
           COMPUTE WS-DEDUCTIONS = WS-GP * DEDUCTION-RATE.
           COMPUTE WS-NP = WS-GP - WS-DEDUCTIONS.
           MOVE WS-GP TO LS-GP.
           MOVE WS-DEDUCTIONS TO LS-DEDUCTIONS.
           MOVE WS-NP TO LS-NP.
           EXIT PROGRAM.
       END PROGRAM Payroll.