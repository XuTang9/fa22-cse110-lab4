1: values added: 20 
it prints result which is defined as 20(10+10)
2: final result: 20 
using var to define result enable it not be limited by code block , so it is defined within the scope of the function sumValues, so this line still works
3:values added: 20
4:error, Process exited with code 1,let keyword makes result's scope within code block which means the {} after if. so after it the result no longer "exists" so the code reports error.
5:error, Process exited with code 1, cannot assign constant variable, in this case result is constant
6:error,Process exited with code 1, cannot assign constant variable, in this case result is constant