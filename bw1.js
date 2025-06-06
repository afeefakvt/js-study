const arr = [1,2,2,2,3,3,3,3,4,5]

const array = []

const map =new Map()

for(const val of arr){
    if(map.has(val)){
        map.set(val,map.get(val)+1)
    }else{
        map.set(val,1)
    }
}

const a = [...map.values()]
const ar = [...new Set(a)]
const sort  =ar.sort((a,b)=>b-a)
const value  = sort[1]

const arrrr = Array.from(map)
for( const [k,v] of arrrr){
    if(v===value){
        array.push(Number(k))
    }
}
console.log(array)
