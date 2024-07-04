#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(void) {
    char alphabet[26];
    printf("Input: ");
    for (int i = 0; i < 26; i++) {
        char temp;
        scanf("%c", &temp);
        alphabet[i] = temp;
    }
    for (int i = 0; i < 26; i++) {
        printf("\'%c\', ", alphabet[i]);
    }
}