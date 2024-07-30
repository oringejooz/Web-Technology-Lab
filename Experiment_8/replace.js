
function replaceMultipleAs(str) {
    return str.replace(/a{2,}/g, 'b');
  }
  
  const testString = "aaa apple banana aaa";
  console.log(replaceMultipleAs(testString));
  