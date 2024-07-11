#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(void) {
    //C:\msys64\ucrt64\bin\gcc.exe
    //https://code.visualstudio.com/docs/cpp/config-mingw#_check-your-mingw-installation
    // Creating input and output file
    FILE *fh_input;
    fh_input = fopen("words.txt", "r");
    FILE *fh_output;
    fh_output = fopen("db.json", "w");

    // Print beginning of output file
    fprintf(fh_output, "{\n");

    //Adding LETTERS
    char upAlphabet[26]= {'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'};
    char lowAlphabet[26] = {'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'};
    fprintf(fh_output, "\t\"letters\": [\n");
    for(int i = 0; i < 25; i++) {
        fprintf(fh_output, "\t\t{\"key\": \"%c\", \"display\": \"%c\"},\n", lowAlphabet[i], upAlphabet[i]); //adds letters Q-N and q-n
    }
    fprintf(fh_output, "\t\t{\"key\": \"m\", \"display\": \"M\"}\n"); //adds letter m (without comma)
    fprintf(fh_output, "],\n");

    //Adding words
    fprintf(fh_output, "\t\"solutions\": [\n");

    // Including newline and terminating character
    char word[7];
    int count = 1;
    // While the file is not empty and the last word is "zones"
    //REF: https://gist.github.com/shmookey/b28e342e1b1756c4700f42f17102c2ff
    while (fgets(word, 7, fh_input) != NULL && (word[0] != 'z' || word[1] != 'o' || word[2] != 'n' || word[3] != 'e' || word[4] != 's')) {
        // Remove newline from the array
        word[strcspn(word, "\n")] = 0;
        // Print the word in proper format
        fprintf(fh_output, "\t\t{\"word\": \"%s\", \"id\": %d},\n", word, count);
        count++;
    }
    fprintf(fh_output, "\t\t{\"word\": \"zones\", \"id\": %d}", count);

    fprintf(fh_output, "\n\t]\n}");

    fclose(fh_input);
    fclose(fh_output);
}
