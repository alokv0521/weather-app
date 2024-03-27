// promises is just like a real life commintment that has two output either accepted/fulfilled/resolved or denies

let b=prompt("please enter a number")

let p=new Promise((resolve, reject)=>{
    let a=1+b;
    if(a+b>2) resolve('sucess')
    else reject('failed')
})

p.then((message)=>{
    console.log('the promise is fulfilled hence'+message)
}). catch((message)=>{
    cosole.log('oh no ... the oromise failed , hece'+message)
})
