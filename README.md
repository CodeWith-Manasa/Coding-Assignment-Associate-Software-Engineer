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
# JavaScript
##  1.Reverse Words in Sentence JavaScript Program

This JavaScript program takes a sentence as input and reverses every word in that sentence. The input sentence is split into words, and each word is reversed before being joined back into a sentence.

## How the Program Works

1. The program uses a simple HTML structure with a script embedded to run JavaScript.

2. The `reverseWordsInSentence` function takes a sentence as input and performs the following steps:
   - It splits the input sentence into words using the space (' ') as a delimiter.
   - It applies the `reverseWord` function to each word in the array.
   - It joins the reversed words back together into a sentence.

3. The `reverseWord` function takes a word as input and reverses the characters within the word. For example, "hello" becomes "olleh".

4. The program uses the `prompt` function to get user input for a sentence.
5. If the user provides a sentence (not null), the program calls `reverseWordsInSentence` to reverse the words in the input sentence and displays the reversed sentence using the `alert` function.

6. If the user cancels the input (input is null), the program displays a message using the `alert` function.

## 2. Sorting an Array in Descending Order

This JavaScript code demonstrates how to sort an array of numbers in descending order.

## Code Explanation

1. The program defines an array named `numbers` with some integer values: `[5, 2, 9, 1, 5, 6]`.

2. It uses the `sort` method to sort the `numbers` array.

3. Inside the `sort` method, there is a callback function that takes two parameters, `a` and `b`, which represent elements in the array.
4. In this callback function, the comparison `b - a` is used. This custom comparison function compares the elements in descending order, which means the larger numbers will come before smaller ones.

5. The sorted array is now stored back in the `numbers` variable.

6. Finally, the program uses `console.log` to display the sorted array.
# HTML
## Calculator Application

This simple calculator application was created using HTML, CSS, and JavaScript. It provides basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Basic Calculator

- The basic calculator can perform addition, subtraction, multiplication, and division.
- To perform calculations, click the respective buttons for numbers and operations.
- You can clear the display by clicking 'C' and backspace with the '←' button.
- To evaluate an expression, click '='.
- If there's an error in the expression, it will display "Error."

## Floating Calculator

In addition to the basic calculator, the application also features a floating calculator that can be accessed by clicking on the '+' symbol.

- Click on the '+' symbol in the corner of the page to open the floating calculator.
- The floating calculator has the same functionality as the basic calculator.
- You can perform arithmetic operations, clear the display, and evaluate expressions.
- Click outside the calculator to close it.

The floating calculator provides a convenient way to perform calculations without leaving the page.

# Survey Form

This is a simple survey form created using HTML, CSS, and JavaScript. The form contains various input fields, including First Name, Last Name, Date of Birth, Country (dropdown), Gender (radio buttons), Profession, Email, and Mobile Number. Two buttons, Submit and Reset, allow users to submit the form and reset the form fields.

## Form Fields

1. **First Name**: A text input field for the first name.
2. **Last Name**: A text input field for the last name.
3. **Gender**: Radio buttons for selecting gender (Male or Female).
4. **Date of Birth**: A date picker for entering the date of birth.
5. **Phone Number**: A text input field for the phone number.
6. **Email**: A text input field for the email address.
7. **Profession**: A text input field for entering the profession.
8. **Country**: A dropdown menu with country options (USA, Canada, UK, India).

## Functionality

- The **Submit** button checks for required fields and performs basic validation.
- If all fields are filled correctly, a popup appears displaying the user's input.
- The user can close the popup, which also triggers a form reset to clear all fields.
- The **Reset** button resets the form fields to their initial state.

## Folder Structure

- `Form.html`: Contains the HTML structure for the survey form and popup.
- `form.js`: Handles form validation and popup functionality using JavaScript.
- `Form.css`: Styles the survey form and popup using CSS.





