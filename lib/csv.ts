import { Provenance } from '../shared/types';

export function csvToArray(str: string, delimiter = ','): Array<Provenance> {
  const headers = str.slice(0, str.indexOf('\n')).split(delimiter);
  const rows = str.slice(str.indexOf('\n') + 1).split('\n');

  return rows.map(function (row) {
    const values = row.split(delimiter);
    return headers.reduce(function (
      object: any,
      header: string,
      index: number,
    ) {
      object[header] = values[index];
      return object;
    },
    {});
  });
}

// export function readCSV(fileName: string) {
//   const directory = path.join(process.cwd(), 'provenance');
//   const fullPath = path.join(directory, `${fileName}.csv`);
//   let data = require('fs').readFileSync(fullPath, 'utf8');
//
//   return csvToArray(data);
// }
//
// export function readTxt2Obj(fileName: string) {
//   const directory = path.join(process.cwd(), 'provenance');
//   const fullPath = path.join(directory, `${fileName}.txt`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const arr = fileContents.toString().split('\n');
//   let obj = {
//     hash: '',
//     finalHash: '',
//   };
//   const contentArr = arr.filter((text) => !!text);
//
//   obj.hash = contentArr[0].replace('CONCATENATED: ', '');
//   obj.finalHash = contentArr[1].replace('HASH: ', '');
//   return obj;
// }
