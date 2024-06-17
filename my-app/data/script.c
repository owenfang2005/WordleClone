#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(void) {
//     {
//     "solutions": [
//         {"word": "plane", "id": 1}
//     ]
// }
    FILE *fh_input;
    fh_input = fopen("words.txt", "r");
    FILE *fh_output;
    fh_output = fopen("db.json", "w");

    fprintf(fh_output, "{\n");
    fprintf(fh_output, "\t\"solutions\": [\n");


    char word[7];
    int count = 1;
    while (fgets(word, 7, fh_input) != NULL && (word[0] != 'p' || word[1] != 'u' || word[2] != 'p' || word[3] != 'a' || word[4] != 'l')) {
        word[strcspn(word, "\n")] = 0;
        fprintf(fh_output, "\t\t{\"word\": \"%s\", \"id\": %d},\n", word, count);
        count++;
    }
    fprintf(fh_output, "\t\t{\"word\": \"pupal\", \"id\": %d}", count);

    fprintf(fh_output, "\n\t]\n}");

    fclose(fh_input);
    fclose(fh_output);
}