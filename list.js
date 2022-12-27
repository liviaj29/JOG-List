export const reverse = list => {
  const array = [...list].reverse()
  return typeof list === "string" ? array.join`` : array
}


export const map = (func,list) => {
  const array = [...list].map(func)
  return typeof list === "string" ? array.join`` : array
}


export const filter = (func,list) => {
  const array = [...list].filter(func)
  return typeof list === "string" ? array.join`` : array
}

export const cycle = (length, list) => {
  const array = filter((m,i)=> i < length, [...Array(length)].flatMap(n=> [...list]))
  return typeof list === "string" ? array.join`` : array
}

export const replaceAt = (index, item, list) => {
  const array = [...list.slice(0,index),item,...list.slice(index+1, list.length)]
  return typeof list === "string" ? array.join`` : array
}

export const replace = (itemOut, itemIn, list) => {
  const array = map(item => item === itemOut ? itemIn : item, [...list])
  return typeof list === "string" ? array.join`` : array
}


export const foldl = (func,initialValue,list) => [...list].reduce(func,initialValue)
export const every = (func,list) => [...list].every(func)
export const some = (func,list) => [...list].some(func)
export const find = (func,list) => filter(func,list)[0]

export const foldr = (func,initialValue,list) => [...list].reduceRight(func,initialValue)
export const sort = array => [...array].sort((a,b)=> a - b)
export const sum = array => array.reduce((S,n)=> S+n,0)
export const product =  array => array.reduce((S,n)=> S*n)
export const isEmpty = list => list.length === 0
export const first = list => list[0]
export const last = list => list[list.length -1]
export const max = array => Math.max(...array)
export const min = array => Math.min(...array)
export const mode = array => first(sort(unique(array).map(x=> replicate(x, sort(array).filter(n=> n===x).length).length)))
export const range = (first,end, step=1) => [...Array(Math.floor(end/step))].map((n,i)=> first + i*step).filter(x=> x<=end)
export const alphaRange = (first,end, alphabet=[...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz']) => alphabet.slice(alphabet.indexOf(first), alphabet.indexOf(end)+1)
export const stepRange = (first, end, step) => [...Array(Math.floor(end/step))].map((n,i)=> (i+1)*step)
export const append = (item, list) => typeof list === "string" ? list + item : [...list,item]
export const prepend = (item, list) => typeof list === "string" ? item + list : [item,...list]
export const remove = (item, list) => filter(n=> n !== item, list)
export const removeAt = (index, list) => filter((n,i) => i !== index, list)
export const init = list => list.slice(0, list.length-1)
export const tail = list => list.slice(1, list.length)
export const take = (numberOfItems, list) => list.slice(0, numberOfItems)
export const drop = (numberOfItems, list) => list.slice(numberOfItems)
export const unique = list => {
  const array = [...new Set(list)]
  return typeof list === "string" ? array.join`` : array
}
export const isEqual = (list1, list2) => typeof list1 === "string" ? list1 === list2 : list1.filter((n,i) => n === list2[i]).length === list1.length
export const combine = (list1, list2, func = (x,y) => x + y) => [...list1].map(n => [...list2].map(m=> func(n,m))).flat()
export const zip = (list1, list2) => [...list1].map((n,i) => list2[i] ? typeof list1 === "string" ? n + list2[i] : [n,list2[i]] : null).filter(Boolean)
export const average = array => sum(array)/array.length
export const median = array => {
  const sorted = sort(array)
  return array.length % 2 
  ? sorted[array.length/2 - 0.5]
  : (sorted[array.length/2-1] + sorted[array.length/2])/2
}
export const takeRange = (first, second, length) => map((n,i)=> first + i*(second-first), [...Array(length)])
export const replicate = (item, length) => map(n=> item, [...Array(length)])
export const replicateString = (item, length) => replicate(item, length).join``
export const insertAt = (index, item, list) => {
  const array = [...list.slice(0,index), item,...list.slice(index, list.length)]
  return typeof list === "string" ? array.join`` : array
}

export const intersection = (array1,array2) => array1.filter(value => array2.includes(value))
export const pickRandom = list => list[Math.floor(Math.random()*list.length)]
export const unzip = array => [array.map(pair => pair[0]),array.map(pair => pair[1])]
export const allDifferent = array => unique(array).length === array.length
export const transpose = list => [...list[0]].map((n,i) => map((a,j) => a[i],list))
export const words = sentence => filter(x => x !== "", sentence.split` `)
export const group = array => map(x => replicate(x, sort(array).filter(n=> n===x).length), sort(unique(array)))
export const heads = list => map((x,i)=> list.slice(0,list.length - i), replicate(null, list.length+1))
export const tails = list => map((x,i)=> list.slice(i), replicate(null, list.length+1))
export const isPrefixOf = (prefix, item) => heads(item).includes(prefix)
export const isSuffixOf = (suffix,item) => tails(item).includes(suffix)
export const any = (condition, list) => filter(condition, list).length !== 0
export const shuffle = item => {
  const a = [...item]
  for(let i = a.length-1,r;i;i--){
    r = Math.floor((Math.random()*(i+1)));
    [a[i],a[r]] = [a[r],a[i]]
  }
  return typeof item === "string" ? a.join`` : a
}


const List = {
  range, alphaRange, takeRange, replicate, cycle, reverse, sort, sum, product, isEmpty, first, last, max, min, replaceAt, replace, insertAt, append, prepend, remove, removeAt, init, tail, take, drop, unique, isEqual, combine, zip, average, median, mode, intersection, pickRandom, unzip, allDifferent, transpose, words, group, heads, tails, isPrefixOf, isSuffixOf, any, shuffle, map, filter, foldl, foldr, every, some, find
}

export default List