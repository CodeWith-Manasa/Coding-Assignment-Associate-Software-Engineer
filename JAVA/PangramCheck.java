import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine().toLowerCase();
        scanner.close();

        if (isPangram(sentence)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String sentence) {
        Set<Character> uniqueChars = new HashSet<>();

        for (char letter : sentence.toCharArray()) {
            if ('a' <= letter && letter <= 'z') {
                uniqueChars.add(letter);
            }
        }

        return uniqueChars.size() == 26;
    }
}
