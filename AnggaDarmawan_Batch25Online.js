function groupAndSortLetters(arr) {
    const letterCount = {};

    // Menghitung jumlah setiap huruf
    arr.forEach(str => {
        for (const char of str) {
            if (letterCount[char]) {
                letterCount[char]++;
            } else {
                letterCount[char] = 1;
            }
        }
    });

    // Mengubah objek menjadi array dan mengurutkan
    const sortedLetters = Object.entries(letterCount).sort((a, b) => {
        if (b[1] === a[1]) {
            if (a[0].toLowerCase() === b[0].toLowerCase()) {
                if (a[0] === b[0]) {
                    return 0;
                }
                return a[0] > b[0] ? -1 : 1;
            }
            if (a[0].toLowerCase() === a[0] && b[0].toLowerCase() === b[0]) {
                return a[0] > b[0] ? 1 : -1;
            }
            return a[0].toLowerCase() > b[0].toLowerCase() ? -1 : 1;
        }
        return b[1] - a[1];
    });
    const sortedLettersCountToString = sortedLetters.map(item => item[0]).join('');

    return sortedLettersCountToString;
}

// Penggunaan
const input = ["Oke", "One"];
console.log(groupAndSortLetters(input));
