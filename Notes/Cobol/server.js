var Cobol = require("cobol");

Cobol(function () {/*
                   IDENTIFICATION DIVISION.
                   PROGRAM-ID. HELLO.
                   ENVIRONMENT DIVISION.
                   DATA DIVISION.
                   PROCEDURE DIVISION.
                   PROGRAM-BEGIN.
                   DISPLAY "Hello world".
                   PROGRAM-DONE.
                   STOP RUN.
                   */}, {
                       compileargs:{
                           free: true
                       }
                   }, function (err, data) {
    console.log(err || data);
});