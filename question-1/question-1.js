// Student Name: Geysiane Lopes Bezerra
// StudentID: 101403935

function lowerCaseWords(array) {
  return new Promise((resolve, reject) => {
    try {
      const filteredArray = array.filter(item => typeof item === 'string').map(item => item.toLowerCase());

      resolve(filteredArray);
    } catch (error) {
      reject('Erro processing array');
    }
  });
}
const mixedArray = ['PIZZA', 10, true, 25, false, 'wings'];
lowerCaseWords(mixedArray)
  .then(result => console.log(result))
  .catch(error => console.log(error));
