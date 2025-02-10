const sortArray = (arr) => {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const numbers = [1, 40, -5, 10, 0];
const sorted = sortArray(numbers);

console.log(`Отсортированный массив: ${sorted}`);