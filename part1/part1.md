1. the value of `i` will be printed. The printed value will be equal to `prices.length`. This is because i was initialized as a var in the global scope.
2. the value of `discountedPrice` will be printed. The printed value will be equal to `prices[prices.length - 1] * (1 - discount)`. This is because whenever a var is declared in the global scope and will replace any existing var of the same name.
3. The value of `finalPrice` will be printed. It will be equal to whatever `Math.round(discountedPrice * 100) / 100` is at the last iteration of the for loop.
4. It will return the list `[50, 100, 150]`. The for loop iterates on the elements of the passed list in order and pushes the resulting calculation to the end of the discounted list.
5. It will cause an error. The `i` is not defined in the scope of that function call.
6. It will cause an error. The `d` is not defined in the same scope of that function call.
7. It will print the value of `finalPrice`. It was declared and initialized in the same scope as the function call so it should run without any issue.
8. It will return the list `[50, 100, 150]`. The for loop iterates on the elements of the passed list in order and pushes the resulting calculation to the end of the discounted list. The final line where the return statement returns a copy of the list created in the function.
9. It will cause an error. The `i` is not defined in the scope of that function call.
10. It will cause an error. `discountedPrice` is not declared in the scope.
11. It will cause an error. `finalPrice` was declared as a const so that means its value cannot be changed, but the function attempts to the for loop.
12. If the program runs and finalPrice is successfully mutated despite being declared const, it will return the list `[50,100,150]`. If the mutation of `finalPrice` didn't work, it will return `[0,0,0]` since `finalPrice` was initialized as `0`. The function itself has an error, so it can't really be used anyways.
13. Objects <br>
  A) `student.name`
  <br>
  B) `student['Grad Year']`
  <br>
  C) `student.greet()`
  <br>
  D) `student['Favorite Teacher'].name`
  <br>
  E) `student.courseLoad[0]`
14. Arithmetic <br>
  A) `'32'`
  <br>
  B) `1`
  <br>
  C) `3`
  <br>
  D) `3null`
  <br>
  E) `4`
  <br>
  F) `0` 
  <br>
  G) `3undefined`
  <br>
  H) `NaN`
  <br>
15. Comparison
  A) `true`
  <br>
  B) `false`
  <br>
  C) `true`
  <br>
  D) `false`
  <br>
  E) `false`
  <br>
  F) `true`
  <br>
16. `===` checks if the two operands are of the same type. `==` checks if they are the same value.
17. It prints out `'How are you?'`. It will go through each if block in order and the first one of `if (true == 2)` is evaluated to false because they are different values. But, for the second one of `else if(2)`, it is true because any number that isn't 0 or false is true.
18.  done in part1-question18.js
19. The function will return the list `[6,8,10]`. The function iterates through each element in the passed `array` argument. It runs the passed `callback` function on each element of the array (in this case its the doSomething function). And, in that `callback` function, it passes another function that doubles the passed number. This essentially creates and returns an array where the corresponding element from the passed array is +2 and then doubled.
20. done in part1-question20.js 
21. It will print `1` then `4` then `3` then `2`. `1` is printed first because it is is run with a simple console.log function call. Then `2` will be printed a whole second later so it will appear last. `3` will be printed after `4` because it is an asynchronise callback and will have some lag despite having a timeout time of 0.
