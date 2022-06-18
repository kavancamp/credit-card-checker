// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// Array of all the arrays 
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:


const validateCred = array => {
    let sum = 0; 
    let newArr = [];
    
     let luhn_validate = function(imei){
        return !/^\d+$/.test(imei) || (imei.split('').reduce(function(sum, d, n){ 
                return sum + parseInt(((n + imei.length) %2)? d: [0,2,4,6,8,1,3,5,7,9][d]);
            }, 0)) % 10 == 0;
    };
    
    // summing up all numbers in the array
      for (j = 0; j < newArr.length; j++) {
        sum += newArr[j];
      }
    // checking if modulo is 0
      if (sum % 10 === 0) {
        return true;
      } else {
        return false;
      }
    }
    
    // function to find and organize valid and invalid numbers into arrays
    const findInvalidCards = nestedArray => {
      const invalidArr= [];
      for (let k = 0; k < nestedArray.length; k++) {
        validateCred(nestedArray[k]);
        if (validateCred(nestedArray[k]) === false) {
            invalidArr.push(nestedArray[k]);
        }
      } 
      return invalidArr;
    }
    
    // prints names of card companies that released invalid cards
    const idInvalidCardCompanies = nestedArrayInvalidNum => {
      const cardCompany = [];
      for (let l = 0; l < nestedArrayInvalidNum.length; l++) {
        if (nestedArrayInvalidNum[l][0] === 3) {
          if (cardCompany.indexOf('Amex') === -1) {
            cardCompany.push('Amex');
          } else {
          continue;
          }
        } else if (nestedArrayInvalidNum[l][0] === 4) {
          if (cardCompany.indexOf('Visa') === -1) {
            cardCompany.push('Visa');
          } else {
          continue;
          }
        } else if (nestedArrayInvalidNum[l][0] === 5) {
          if (cardCompany.indexOf('Mastercard') === -1) {
            cardCompany.push('Mastercard');
          } else {
          continue;
          }
        } else if (nestedArrayInvalidNum[l][0] === 6) {
         if (cardCompany.indexOf('Discover') === -1) {
            cardCompany.push('Discover');
          } else {
          continue;
          }
        } else {
          if (cardCompany.indexOf('Company not found') === -1) {
            cardCompany.push('Company not found');
          } else {
          continue;
          }
        } 
      } return cardCompany;
    }
    
    console.log(idInvalidCardCompanies(batch));