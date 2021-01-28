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
14. something
15. hH:w
16. 
