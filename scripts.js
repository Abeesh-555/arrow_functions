 
 const transformString = str => {
   
    return [...str].map((char, index) => `${index}${char.toUpperCase()}`).join('');
};


const userInput = prompt('Enter a string:');


if (userInput !== null) {
   
    const result = transformString(userInput);
  
    document.body.innerHTML = `<p>${result}</p>`;
} else {
  
    document.body.innerHTML = `<p>No input provided.</p>`;
}