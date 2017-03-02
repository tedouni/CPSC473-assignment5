CPSC 473 - Web Front-End Engineering for Internet Applications
Assignment 5 - Spring 2017
Section 2 due March 6.  Section 1 due March 8.
In this assignment, you will lay the foundation for the CoffeeRun app and get started with the QUnit test framework.
Complete the following:
Work through Chapter 8 to create the DataStore and Truck modules.

As you work in the DevTools Console, keep in mind that you can recall previously executed code using the Up and Down arrow keys on the keyboard.
That said, it would be nice to have our test code for DataStore and Truck saved permanently.  Create a new page, tests.html, and a new script, scripts/tests.js, and configure them to use the QUnit test framework.
Convert the code in Figure 8.10 into QUnit tests for DataStore.  When a function returns a value, use appropriate assert methods to check its result.
What problem do you run into when you attempt to convert the code in Figure 8.32 into QUnit tests for Truck?  Document the problem in tests.js, and define additional methods in truck.js to allow Truck to be tested appropriately.
Push the contents of your coffeerun directory into a new public GitHub repository.
Grading
How to know if the assignment has been successfully completed:
When you visit http://localhost:3000 with browser-sync running and the DevTools Console open, are you able to access myTruck and execute its methods?
Have you created a .eslintrc.json file?
Have you fixed any issues detected by the linter-eslint plugin?
Have you run the atom-beautify plugin?
Have you fixed any JavaScript issues displayed in the DevTools Console?
Does tests.html load both QUnit and the appropriate modules from CoffeeRun?
When you visit http://localhost:3000/tests.html, do you see the QUnit test runner?
Are there QUnit tests corresponding to the module test code from Chapter 8?
Do the QUnit tests check for the correct return values from functions?
Do the QUnit tests pass?
Have you appropriately addressed the need to check the output of console.log()?
Have you documented the changes that were necessary to test the Truck module?
Do you have a new repository for this assignment?
Have you checked in the changes from this assignment and pushed them to GitHub?
