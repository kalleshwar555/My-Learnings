// find the value from nested object. if value exists in object return its key else return "Not Found"

// i/p: {
// 	data: {
// 		info: {
// 			address1: {
// 				city: {
// 					primary: 'Pune'
// 				}
// 			}
// 		}
// 	}
// }
// find if value Pune exists in above object

let obj = {
	data: {
		info: {
			address1: {
				city: {
					primary: 'Pune'
				}
			}
		}
	}
}

function isObject(object){
  if(typeof object === 'object' && object !== null && !Array.isArray(object)) return true;
  return false
}

function contains(object, target){
  // if value match retur key
  if(isObject(object) && target){
    for(let key in object){
      let value = object[key];
      if(value === target){
        return key
      }
      if(isObject(value)){
        return contains(value, target)
      }
    }
  }
  return "Not Found"
  // else return "Not Found"
}

let testList = [
  {
    object: null, 
    target: 'Pune', 
    result: 'Not Found' 
  },
  {
    object: [], 
    target: 'Pune', 
    result: 'Not Found' 
  },
  {
    object: {}, 
    target: null, 
    result: 'Not Found' 
  },
  {
    object: {}, 
    target: '', 
    result: 'Not Found' 
  },
  {
    object: obj, 
    target: 'Pune', 
    result: 'primary'
  }
  ,
  {
    object: obj, 
    target: 'Mumbai', 
    result: 'Not Found'
  }
]

let passCaseCount = 0
testList.forEach(({object, target, result}) => {
  if(contains(object, target) === result) passCaseCount++;
});

if(passCaseCount === testList.length){
  console.log('all passed')
}
