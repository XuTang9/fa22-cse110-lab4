1. 3, prices.length equals 3, then after 3 loops i equals three and is no longer smaller than 3, then loop stops and and line 12 gets executed 
2. 150, final element of the prices is 300 and 300 * (1-0.5) = 150
3. 150 , finalPrice would be rounding of 150*100/100 so still 150
4. [50,100,150], basically each element in the prices gets a 50% discount and gets pushed to discounted in the for loop, so the result is half value of the array of prices argument pushed in
5. error, using let instead of var limits i's scope within the code block (for loop) so it is no longer usable after it
6. error, discounted price is defined within the for loop so its scope is also within it. 
7. 150, finalPrice is defined using let outside the for loop so it is usable within the function
8. [50,100,150], discounted is also defined using let outside the for loop so it is usable within the function
9. error, i's scope is within the for loop
10. 3, length of the argument array is printed which is 3
11. [50,100,150],it returns the discounted prices array, using const means the array cannot be reassigned but the values within can be manipulated. (using push)
12. A.student.name B.student['Grad Year'] C.student.greeting() D. student['Favorite Teacher'].name E. student.courseLoad[0]
13. A. '32' , number 2 is mapped to a string value B. 1, string 3 is mapped to a integer C.3, null is converted to value 0 D. 3null, null is converted to string value E. 4, true is converted to 1 F. 0, both false and null are  converted to 0.
G:3undefined, undefined is converted to string in H. NaN,undefined is converted to NaN
14. A.true,  string '2' is converted to number 2 B. false, javascript comapres string using letter by letter so '2'>'1' C. true, '2' is converted as number 2 D. false, ===compares two without conversion E. false, true's numeric value is 1 F. true, Boolean(2) is true
15. basically == allow for conversions and then check if the two values are the same, === does not allow type conversions and is more strict. 
16. in js
17. [2,4,6], basically for every element in array[1,2,3], function doSomething is called and multiply each element by 2, with a for loop to iterate through the origional array, new array would be elements with 2 times the origional value. 
18. 1,4,3,2