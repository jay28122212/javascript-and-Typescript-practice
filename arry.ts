function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    
    const result = n1 + n2;
    if (showResult) {
      console.log(phrase + result);
    } else {
      return result;
    }
  }
  
  let number1: number;
  number1 = 5;
  const number2 = 2.8;
  const printResult = true;
  let resultPhrase = 'Result is: ';
  
  add(number1, number2, printResult, resultPhrase);


  //

  function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }
  
  const combinedAges = combine(30, 26);
  console.log(combinedAges);
  
  const combinedNames = combine('Max', 'Anna');
  console.log(combinedNames);

//

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
  } = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
  };
  
  
  
  let favoriteActivities: string[];
  favoriteActivities = ['Sports'];
  
  console.log(person.name);
  
  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
  }

  //


  function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }
  
  const combinedAges = combine(30, 26);
  console.log(combinedAges);
  
  const combinedNames = combine('Max', 'Anna');
  console.log(combinedNames);