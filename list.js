export const range = (first,end, step=1) => [...Array(Math.floor(end/step))].map((n,i)=> first + i*step).filter(x=> x<=end)
export const alphaRange = (first,end, alphabet=[...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz']) => alphabet.slice(alphabet.indexOf(first), alphabet.indexOf(end)+1)
export const stepRange = (first, end, step) => [...Array(Math.floor(end/step))].map((n,i)=> (i+1)*step)
export const takeRange = (first, second, length) => [...Array(length)].map((n,i)=> first + i*(second-first))
export const replicate = (item, length) => [...Array(length)].map(n=> item)
export const cycle = (list, length) => [...Array(length)].flatMap(n=> list).filter((m,i)=> i < length)
export const reverse = array => [...array].reverse()
export const sort = array => [...array].sort((a,b)=> a - b)
export const sum = array => array.reduce((S,n)=> S+n,0)
export const product =  array => array.reduce((S,n)=> S*n)
export const isEmpty = array => array.length === 0
export const first = array => array[0]
export const last = array => array[array.length -1]
export const max = array => Math.max(...array)
export const min = array => Math.min(...array)
export const replaceAt = (array, index, item) => [...array.slice(0,index),item,...array.slice(index+1, array.length)]
export const replace = (array, itemOut, itemIn) => array.map(n => n === itemOut ? itemIn : n)
export const insert = (array, index, item) => [...array.slice(0,index), item,...array.slice(index, array.length)]
export const append = (array, item) => [...array,item]
export const prepend = (array, item) => [item,...array]
export const remove = (array, item) => array.filter(n=> n !== item)
export const removeAt = (array, index) => array.filter((n,i) => i !== index)
export const init = array => array.slice(0, array.length-1) 
export const tail = array => array.slice(1, array.length)
export const take = (array, numberOfItems) => array.slice(0, numberOfItems)
export const drop = (array, numOfItems) => array.slice(numOfItems)
export const unique = array => [...new Set(array)]
export const isEqual = (array1, array2) => array1.filter((n,i) => n === array2[i]).length === array1.length
export const combine = (array1, array2, func) => array1.map(n => array2.map(m=> func(n,m))).flat()
export const zip = (array1, array2) => array1.map((n,i) => array2[i] ? [n,array2[i]] : null).filter(Boolean)
export const average = array => sum(array)/array.length
export const median = array => {
  const sorted = sort(array)
  return array.length % 2 
  ? sorted[array.length/2 - 0.5]
  : (sorted[array.length/2-1] + sorted[array.length/2])/2
}

export const mode = array => first(sort(unique(array).map(x=> replicate(x, sort(array).filter(n=> n===x).length).length)))

export const intersection = (array1,array2) => array1.filter(value => array2.includes(value))
export const pickRandom = array => array[Math.floor(Math.random()*array.length)]
export const unzip = array => [array.map(pair => pair[0]),array.map(pair => pair[1])]
export const allDifferent = array => unique(array).length === array.length
export const transpose = array => array.map((n,i,a)=> n.map((_,j)=> a[j][i]))
export const words = sentence => sentence.split` `.filter(x => x !== "")
export const group = array => sort(unique(array)).map(x => replicate(x, sort(array).filter(n=> n===x).length))
export const heads = item => replicate(null, item.length+1).map((x,i)=> item.slice(0,item.length - i))
export const tails = item => replicate(null, item.length+1).map((x,i)=> item.slice(i))
export const isPrefixOf = (prefix, item) => heads(item).includes(prefix)
export const isSuffixOf = (suffix,item) => tails(item).includes(suffix)
export const any = (condition, item) => item.filter(condition).length !== 0
export const shuffle = array => {
  const a = [...array]
  for(let i = a.length-1,r;i;i--){
    r = Math.floor((Math.random()*(i+1)));
    [a[i],a[r]] = [a[r],a[i]]
  }
  return a
}


const List = {
  range, alphaRange, takeRange, replicate, cycle, reverse, sort, sum, product, isEmpty, first, last, max, min, replaceAt, replace, insert, append, prepend, remove, removeAt, init, tail, take, drop, unique, isEqual, combine, zip, average, median, mode, intersection, pickRandom, unzip, allDifferent, transpose, words, group, heads, tails, isPrefixOf, isSuffixOf, any, shuffle
}

export default List