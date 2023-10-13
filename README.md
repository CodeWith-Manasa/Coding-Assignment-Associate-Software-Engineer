# Coding-Assignment-Associate-Software-Engineer

# Java


## 1. Shuffle Array in Java

This Java program demonstrates how to shuffle an array of integers.

## Code Explanation

The code shuffles an array of integers (1, 2, 3, 4, 5, 6, 7) by swapping elements using a random index. Here's how it works:

1. We create an array `array` containing integers (1, 2, 3, 4, 5, 6, 7).

2. We iterate through the array in reverse order using a for loop. Starting from the last element, we select a random index `j` within the range `[0, i + 1]`, where `i` is the current loop index.

3. We swap the elements at indices `i` and `j` using a temporary variable `temp`. This shuffling process randomizes the order of elements in the array.

4. After the loop completes, the array is shuffled.

5. Finally, we print the shuffled array to the console.

#  2. Roman Numeral to Integer Converter in Java

This Java program converts a Roman numeral to an integer.

## Code Explanation

The code takes a Roman numeral as input and converts it to an integer. Here's how it works:

1. We create a `Map` called `romanToInteger` to store Roman numerals as keys and their corresponding integer values as values. This map is used to perform the conversion.

2. We prompt the user to enter a Roman numeral and convert it to uppercase to handle both lowercase and uppercase inputs.

3. We initialize two variables, `result` and `prevValue`, to store the integer value and the previous integer value during the conversion.

4. We iterate through the Roman numeral string in reverse order using a for loop. Starting from the last character, we extract the integer value of each Roman numeral character from the `romanToInteger` map.

5. We compare the current integer value with the previous integer value. If the current value is less than the previous value, we subtract it from the result; otherwise, we add it to the result.

6. After the loop completes, the result contains the integer value of the Roman numeral.

7. Finally, we print the integer value of the Roman numeral to the console.

#  3.Pangram Check Java Program

This Java program checks whether an input sentence is a pangram or not. A pangram is a sentence containing every letter of the alphabet at least once.

## Code Explanation

1. The program uses a `HashSet` to keep track of unique lowercase letters encountered in the input sentence.

2. It iterates through each character in the input sentence and checks if it falls within the lowercase letter range from 'a' to 'z'. If it's a lowercase letter, it's added to the `HashSet`.

3. After processing all characters in the sentence, it checks if the size of the `HashSet` is equal to 26. In a pangram, there should be 26 unique lowercase letters in the English alphabet. If the size is 26, the program returns `true`, indicating that the input is a pangram. Otherwise, it returns `false`.

