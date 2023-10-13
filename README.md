# Coding-Assignment-Associate-Software-Engineer

# Java


## Shuffle Array in Java

This Java program demonstrates how to shuffle an array of integers.

## Code Explanation

The code shuffles an array of integers (1, 2, 3, 4, 5, 6, 7) by swapping elements using a random index. Here's how it works:

1. We create an array `array` containing integers (1, 2, 3, 4, 5, 6, 7).

2. We iterate through the array in reverse order using a for loop. Starting from the last element, we select a random index `j` within the range `[0, i + 1]`, where `i` is the current loop index.

3. We swap the elements at indices `i` and `j` using a temporary variable `temp`. This shuffling process randomizes the order of elements in the array.

4. After the loop completes, the array is shuffled.

5. Finally, we print the shuffled array to the console.

## Running the Code

To run this Java program, you need a Java development environment. You can compile and execute the code using Java commands.

```bash
javac shuffleArray.java
java shuffleArray
