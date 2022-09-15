import fs from 'fs';
import path from 'path';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const dataDir=path.join(process.cwd(),"data");

//console.log(dataDir);

export default function handler(req, res) {

  //creates a complete path to JSON data
  const filepath=path.join(dataDir, "owners.json");

  //want to wait for it to finish running to have fs read file sync send us back its contents of the file.
  const jsondata=fs.readFileSync(filepath, "utf8");
  
//since readFileSync returns a string we need to convert it into a JSON object
  const jsonObj=JSON.parse(jsondata);

//use .sort() to return array object in order
  jsonObj.sort(
    function (a,b){
      return a.name.localeCompare(b.name);
    }
  );
  
  
  res.status(200).json({ jsonObj })
}
