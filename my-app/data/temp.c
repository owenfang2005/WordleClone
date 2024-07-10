#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(void) {
    char lowAlphabet[26]; // for uppercase letter
    char upAlphabet[26]; // for lowercase letter
    printf("Input: ");
    for (int i = 0; i < 26; i++) {
        char temp;
        scanf("%c", &temp);
        lowAlphabet[i] = temp + 32;
        upAlphabet[i] = temp;
    }
    for (int i = 0; i < 26; i++) {
        printf("\'%c\', ", lowAlphabet[i]);
    }
    printf("\n\n");
    for (int i = 0; i < 26; i++) {
        printf("\'%c\', ", upAlphabet[i]);
    }
}