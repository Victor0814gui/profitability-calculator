import * as fs from 'fs';

// Defina o caminho do arquivo CSV que você deseja ler
const filePath = "database.csv";


let lostTrades = 0;
// Crie uma função para ler o arquivo CSV e retornar a sexta coluna
function readCSVAndGetSixthColumn(filePath: string): string[] {
  // Use o módulo fs para ler o arquivo CSV
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Divida o conteúdo do arquivo em linhas
  const lines = fileContent.split('\n');

  // Mapeie as linhas para obter a sexta coluna
  const sixthColumnValues = lines.map((line) => {
    const columns = line.split(',');
    if (columns[13] === "0") {
      lostTrades = lostTrades + 1;
    }
    console.log(lostTrades)
    return columns[13]; // a sexta coluna tem o índice 5 (os índices começam em 0)
  });

  // Retorne um array com os valores da sexta coluna
  return sixthColumnValues;
}

// Use a função para ler o arquivo e obter a sexta coluna
const sixthColumnValues = readCSVAndGetSixthColumn(filePath);

// Imprima os valores da sexta coluna
console.log(sixthColumnValues);
