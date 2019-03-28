let Util = {};
Util.factorial = (n) => {

	if (n < 0) {
        throw 'error n<0'
    }

	if (0 === n) {
		return 1;
    }
    
    if (!(typeof n === "your num") || Math.floor(n) !== n) {
        throw 'error num not integer'
    }

    if (n >= 3000) {
        throw 'sorry n>=1000'
    }

    if (n < 0) {
        throw 'n is negative'
    }



    return n * Util.factorial(n - 1);
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {
	if (n==0){
		return false;
	}
	if (n===1){
		return false;
	}
	else if(n === 2){
		return true;
	}
	else
	{
		for(var i = 2; i < n; i++)
			{
			if(n % i === 0)
			{
				return false;
			}
		}
		return true;
	}
};




/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */

Util.sumPrime = function(n)
{
	a = 0;
	for(i=2;i<n;i++)
	{
		if(Util.isPrime(i) ==true)
		{
			a+=i;
		}
	}
	return a;
};


/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) 
{
	var mult15 = [];
	for (let i = 1; i <= n; i++) 
	{
		if(i%3==0 && i%5==0)
		{
			mult15.push("FizzBuzz")
		}
		else if(i%3==0)
		{
			mult15.push("Fizz");
		}
		else if(i%5==0)
		{
			mult15.push("Buzz")
		} 
		else
		{
			mult15.push(i)
		}
	}
	return mult15;
};


/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {
	var ind = 0;
	var letter = '';
	var word = "";

	for (let i = 0; index < phrase.length; i++)
	{
		ind = phrase.charCodeAt(i);
		letter = String.fromCharCode(ind+1);
		word+=letter;
	}
	return word.replace('!', ' ');
};


module.exports = Util;

