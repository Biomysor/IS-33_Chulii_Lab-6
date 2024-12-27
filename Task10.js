console.log("Task 10")
function checkBrackets(str) {
    const stack = [];
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
  
    for (const char of str) {
      if (brackets[char]) {
       
        stack.push(char);
      } else if (Object.values(brackets).includes(char)) {
        
        const last = stack.pop();
        if (brackets[last] !== char) {
          return false; 
        }
      }
    }
  

    return stack.length === 0;
  }
  

  console.log(checkBrackets("function test() { return [1, 2, 3]; }")); 
  console.log(checkBrackets("function test() { return [1, 2, 3; }")); 
  