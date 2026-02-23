let phoneBook = [
  { name: "Jasmine", phone: "4165559999", city: "Detroit" },
  { name: "Dan", phone: "6475551234", city: "Calgary" },
  { name: "Cory", phone: "9051112222", city: "Caledonia" },
  { name: "Wilmer", phone: "4378887777", city: "Wilmington" },
  { name: "Sofia", phone: "6041239876", city: "Vancouver" },
  { name: "Marcus", phone: "7805554321", city: "Edmonton" },
  { name: "Priya", phone: "4169873456", city: "Toronto" },
  { name: "Leon", phone: "5146782345", city: "Montreal" },
  { name: "Anika", phone: "3065551111", city: "Saskatoon" },
  { name: "Tomás", phone: "4033217654", city: "Calgary" },
  { name: "Yuki", phone: "6049998888", city: "Burnaby" },
  { name: "Rachel", phone: "9052223344", city: "Hamilton" },
  { name: "Omar", phone: "4167776655", city: "Mississauga" },
  { name: "Ingrid", phone: "2049994433", city: "Winnipeg" },
  { name: "Felix", phone: "6135558822", city: "Ottawa" },
  { name: "Clara", phone: "7094441122", city: "St. Johns" },
  { name: "Mateo", phone: "4385559900", city: "Laval" },
  { name: "Nadia", phone: "2503336677", city: "Victoria" },
  { name: "Kevin", phone: "9058881234", city: "Brampton" },
  { name: "Zara", phone: "6047772211", city: "Surrey" },
  { name: "Trevor", phone: "4032225566", city: "Red Deer" },
  { name: "Lina", phone: "5147773388", city: "Longueuil" },
  { name: "Diego", phone: "4169991177", city: "Scarborough" },
  { name: "Hana", phone: "7806664422", city: "Fort McMurray" },
  { name: "Patrick", phone: "3062228899", city: "Regina" },
  { name: "Elena", phone: "6041115544", city: "Richmond" },
  { name: "Sam", phone: "9053339977", city: "Oakville" },
  { name: "Bianca", phone: "4167774488", city: "Etobicoke" },
  { name: "Raj", phone: "6048882266", city: "Coquitlam" },
  { name: "Mika", phone: "2044447733", city: "Brandon" },
  { name: "Oscar", phone: "4385553311", city: "Gatineau" },
  { name: "Tanya", phone: "6139996655", city: "Kingston" },
  { name: "Wesley", phone: "4031118844", city: "Lethbridge" },
  { name: "Freya", phone: "2506662299", city: "Kelowna" },
];


//Create function

function addEntry(book, entry){
   return book.push(entry)
}


//Update function

function updateEntry(book, name, newData){

    for(i=0; i < book.length; i++){
        if(book[i].name === name){
            Object.assign(book[i], newData)
            break
        }
        
    }
      
}

//Delete function

function deleteEntry(book, name){

    for(i=0; i<book.length; i++){
        if(book[i].name === name){
            book.splice(i, 1)
            break
        }
    }
}

// Part A

function bubbleSortByName(book){
    for(let i=0; i<book.length; i++){
        for(let j=0; j<book.length -1 -i; j++)
          if(book[j].name > book[j + 1].name){
            [book[j], book[j + 1]] = [book[j + 1], book[j]];
          }
    }
    }


 //Part B
 
 function selectionSortByPhone(book){
    for(let i = 0; i<book.length; i++){
       let minIndex = i
        for(let j = i+1; j<book.length; j++ ){
            if(Number(book[j].phone) < Number(book[minIndex].phone))
            minIndex = j;
        }
        if(minIndex !== i) {
        [book[i], book[minIndex]] = [book[minIndex], book[i]];
    }
     
     }
 }

 //Part C
 function mergeSortByName(book) {
  // Caso base: arrays de 0 o 1 elemento ya están ordenados
  if (book.length <= 1) {
    return book;
  }

  // Dividir el array en dos mitades
  const mid = Math.floor(book.length / 2);
  const left = book.slice(0, mid);
  const right = book.slice(mid);

  // Ordenar recursivamente cada mitad y luego mergearlas
  return mergeByName(
    mergeSortByName(left),
    mergeSortByName(right)
  );
}

function mergeByName(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].name <= right[j].name) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}



console.log("=== TEST addEntry ===");
addEntry(phoneBook, { name: "Zara", phone: "6047772211", city: "Surrey" });
console.log("Last entry:", phoneBook[phoneBook.length - 1]);

console.log("\n=== TEST updateEntry ===");
updateEntry(phoneBook, "Dan", { phone: "9999999999", city: "Toronto" });
let dan = phoneBook.find(e => e.name === "Dan");
console.log("Dan updated:", dan);

console.log("\n=== TEST deleteEntry ===");
console.log("Before delete:", phoneBook.length, "entries");
deleteEntry(phoneBook, "Cory");
console.log("After delete:", phoneBook.length, "entries");
let cory = phoneBook.find(e => e.name === "Cory");
console.log("Cory found?", cory);

console.log("\n=== TEST bubbleSortByName ===");
bubbleSortByName(phoneBook);
console.log("Sorted names:");
for (let i = 0; i < phoneBook.length; i++) {
  console.log(" ", phoneBook[i].name);
}


console.log("\n=== TEST selectionSortByPhone ===");
selectionSortByPhone(phoneBook);
for (let i = 0; i < phoneBook.length; i++) {
  console.log(phoneBook[i].phone, "-", phoneBook[i].name);
}

console.log("\n=== TEST mergeSortByName ===");

const sortedByName = mergeSortByName(phoneBook);

console.log("ORIGINAL (not modified):");
for (let i = 0; i < phoneBook.length; i++) {
  console.log(phoneBook[i].name);
}

console.log("\nNEW SORTED ARRAY:");
for (let i = 0; i < sortedByName.length; i++) {
  console.log(sortedByName[i].name);
}

/*
Which algorithm was easiest to implement?
Bubble Sort, because it only compares adjacent elements and swaps immediately.

Which one was hardest to understand?
Merge Sort, because it uses recursion and splitting before merging.

Which sorting algorithms modify the original array?
Bubble Sort and Selection Sort.

Which algorithm returns a new array?
Merge Sort.

What is the main structural difference between merge sort and the other two?
Merge Sort uses divide and conquer with recursion, while Bubble Sort and Selection Sort use iterative loops and sort in place.
*/
