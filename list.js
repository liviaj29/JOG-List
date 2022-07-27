export const List = {
    range: (a,b) => [...Array(b-a+1)].map((n,i)=> i+a),
    reverse: array => [...array].reverse(),
    sort: array => [...array].sort((a,b)=> a - b),
    sum: array => array.reduce((S,n)=> S+n,0),
    product: array => array.reduce((S,n)=> S*n),
    isEmpty: array => array.length === 0,
    first: array => array[0],
    last: array => array[array.length -1],
    max: array => Math.max(...array),
    min: array => Math.min(...array),
    replaceAt: (array, index, item) => [...array.slice(0,index),item,...array.slice(index+1, array.length)],
    replace: (array, itemOut, itemIn) => array.map(n => n === itemOut ? itemIn : n),
    insert: (array, index, item) => [...array.slice(0,index), item,...array.slice(index, array.length)],
    append: (array, item) => [...array,item],
    prepend: (array, item) => [item,...array],
    remove: (array, item) => array.filter(n=> n !== item),
    removeAt: (array, index) => array.filter((n,i) => i !== index),
    init: array => array.slice(0, array.length-1), 
    tail: array => array.slice(1, array.length),
    take: (array, numOfItems) => array.slice(0, numOfItems),
    drop: (array, numOfItems) => array.slice(numOfItems),
    unique: array => [...new Set(array)], 
    isEqual: (array1, array2) => array1.filter((n,i) => n === array2[i]).length === array1.length,
    combine: (array1, array2, func) => array1.flatMap(n => array2.map(m=> func(n,m))),
    zip: (array1, array2) => array1.map((n,i) => array2[i] ? [n,array2[i]] : null).filter(Boolean),
    shuffle: array => {
    const a = [...array]
    for(let i = a.length-1,r;i;i--){
      r = Math.floor((Math.random()*(i+1)));
      [a[i],a[r]] = [a[r],a[i]]
    }
    return a
    }
  }