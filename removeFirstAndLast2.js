// array = arr => arr.split(',').slice(1, -1).join(' ') || null
function array(arr){
 

let newArr = arr.split(',')
newArr.pop()
newArr.shift()
let str = newArr.join(' ')
return str || null
 
  
    
}
