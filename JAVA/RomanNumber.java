import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class RomanNumber {
    public static void main(String[] args){
        Map<Character, Integer> romanToInteger = new HashMap<>();
        romanToInteger.put('I', 1);
        romanToInteger.put('V', 5);
        romanToInteger.put('X', 10);
        romanToInteger.put('L', 50);
        romanToInteger.put('C', 100);
        romanToInteger.put('D', 500);
        romanToInteger.put('M', 1000);

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine().toUpperCase();
        
        int result = 0;
        int prevValue = 0;
        for (int i = romanNumeral.length() - 1; i >= 0; i--) {
            int value = romanToInteger.get(romanNumeral.charAt(i));

            if (value < prevValue) {
                result -= value;
            } else {
                result += value;
            }

            prevValue = value;
        }

        System.out.println("The integer value of " + romanNumeral + " is: " + result);
        scanner.close();

    }
    
}
