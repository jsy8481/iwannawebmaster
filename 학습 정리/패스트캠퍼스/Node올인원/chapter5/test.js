const array = []
const pro = new Promise(resolve => {
    console.log(1000)
    resolve(func)
})

const func = () => console.log(10)