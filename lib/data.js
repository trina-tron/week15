import fs from 'fs';
import path from 'path';

//filepath to data directory using .join
const dataDir=path.join(process.cwd(), 'data');

export function getIdOwners() {

  const dataDir=path.join(process.cwd(), 'data');
  
  // get filepath to json file
  const filePath = path.join(dataDir, "owners.json");
  // load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);
  // use map() on array to extract just id properties into new array of obj values
  return jsonObj.map(item => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  });
}

export function getIdPets() {

  const dataDir=path.join(process.cwd(), 'data');
  
  // get filepath to json file
  const filePath = path.join(dataDir, "pets.json");
  // load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);
  // use map() on array to extract just id properties into new array of obj values
  return jsonObj.map(item => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  });
}

export function getSortedListPet() {

  const filePath = path.join(dataDir, "pets.json");
  
  const jsonString = fs.readFileSync(filePath, 'utf8');
  
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);
  
  // sort json array by name property alphabetical by name
  jsonObj.sort(function (a, b) {
      return a.name.localeCompare(b.name);
  });

  // use map() on array to extract just id + name properties into new array of obj values
  return jsonObj.map(item => {
    return {
      id: item.id.toString(),
      name: item.name
    }
  });
}
export function getSortedListOwner() {

  const filePath = path.join(dataDir, "owners.json");
  
  const jsonString = fs.readFileSync(filePath, 'utf8');
  
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);
  
  // sort json array by name property alphabetical by name
  jsonObj.sort(function (a, b) {
      return a.name.localeCompare(b.name);
  });

  // use map() on array to extract just id + name properties into new array of obj values
  return jsonObj.map(item => {
    return {
      id: item.id.toString(),
      name: item.name
    }
  });
}



//function used by getStacticProps() in [id]
export async function getPetTogether(idRequested){
  
 /*let fileName=(areFriends)? "owners.json":"pets.json";*/

  //get filepath to json file
  const filePath= path.join(dataDir, 'pets.json');

  //load json file contents
  const jsonString= fs.readFileSync(filePath, "utf8");

  //convert string from file into json array object
  const jsonObj= JSON.parse(jsonString);

  //returns an array with one element in it
  const objMatch= jsonObj.filter(obj =>{
    return obj.id.toString()=== idRequested;
  });

  let objReturned;
  if(objMatch.length >0){
    objReturned=objMatch[0]
     // objReturned["owner"] = areFriends;
  }
  else{
    //returns empty
    objReturned={}
  }
  //send back to dynamic routed page
  return objReturned;
}
export async function getOwnerTogether(idRequested){
  
 /*let fileName=(areFriends)? "owners.json":"pets.json";*/

  //get filepath to json file
  const filePath= path.join(dataDir, 'owners.json');

  //load json file contents
  const jsonString= fs.readFileSync(filePath, "utf8");

  //convert string from file into json array object
  const jsonObj= JSON.parse(jsonString);

  //returns an array with one element in it
  const objMatch= jsonObj.filter(obj =>{
    return obj.id.toString()=== idRequested;
  });

  let objReturned;
  if(objMatch.length >0){
    objReturned=objMatch[0]
     // objReturned["owner"] = areFriends;
  }
  else{
    //returns empty
    objReturned={}
  }
  //send back to dynamic routed page
  return objReturned;
}
export function getPetData(areFriends, idRequested) {
    
    let friendList = getDataTogether(areFriends, idRequested)
    return friendList;
};

export async function getData(areFriends, idRequested) {
    let objReturned = getDataTogether(areFriends, idRequested);
    objReturned["friendData"] = getDataTogether(!areFriends, objReturned.friend.toString());
    return objReturned;
}




