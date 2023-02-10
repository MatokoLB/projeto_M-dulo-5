import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let properties = [];

const getProperties = () => {
  rl.question('Digite uma propriedade de CSS ou "SAIR" para encerrar: ', (input) => {
    if (input === 'SAIR' ||input === 'sair') {
      console.log('Lista de propriedades ordenadas:');
      properties.sort().forEach(property => console.log(property));
      rl.close(); 
    } else {
      properties.push(input);
      getProperties();
    }
  });
};

console.log('Digite as propriedades de CSS (digite "SAIR" para encerrar):');
getProperties();
