let tab=[]
let array=[]
let x=5
for (let i = 0; i < 1000;i++) {
    array.push(Math.random())
    console.log(`${i}: ${Math.floor(array[i]*1000)}`)  
    tab.push(Math.floor(array[i]*1000)) 

}
for(let k=0;k<tab.length;k++){
    if(x===tab[k]){
        console.log(`True, There is value ${x} index in ${k}`)
    } 
}
console.log("this is number between [-10,10]")
for(let j=0;j<tab.length;j++){
    if(tab[j]>=-10 && tab[j]<=10){
        console.log(`${j}: ${Math.floor(tab[j])}`)
    }
}

