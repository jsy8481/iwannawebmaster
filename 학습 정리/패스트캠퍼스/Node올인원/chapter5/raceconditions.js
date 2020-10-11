// 둘 이상의 인풋을 이벤트 기반의 리액터 패턴으로 처리하기 때문에
// 레이스 컨디션이 발생할 수 있음 - 정확하게 만들면 발생하지 않음
// 미처 고려하지 못한 변수로 인해 발생할 수 있음, 이벤트 루프 이해 문제

// Promise가 들어올 경우

// [Promise1, Promise2, Promise3].map(item => {
//     // Promise는 비동기적으로 실행된다. -> 어떤 것이 먼저 끝날지 모른다.

// })

// const arr = [Promise1, Promise2]

// arr.forEach, map async 사용안됨
// forEach의 경우, 해당 루프가 종료되는 것에 대한 결과를 기다려 주지 않음
//  함수의 내용을 처리만 함, for of는 가능하다. 
//  변수 할당 과정이, 루프가 돈 이후에 실행되어야 하기 때문에 그런 것으로 예측된다.

// for (const item of arr){
//     // 비동기 코드 가능
// }

// 두 개 이상의 데이터를 받았을 때, 어떠한 데이터가 먼저 완결될지 조건이 없어서
// 경쟁 상태가 됨
let total = 0;

async function getTotal(){
    return total
}

async function setTotal(value){
    total = value
}

async function increment(value, inc){
    return value + inc
}

async function add(){
    let current, newValue
    current = await getTotal()
    newValue = await increment(current, 20)
    await setTotal(newValue)
}

async function main(){

    const transaction1 = add()
    const transaction2 = add()

    await transaction1
    await transaction2

    console.log(await getTotal())
}
main()

// 실무에서는 클래스는 별개의 파일로, module.exports

// Lock 부문은 잘 이해가 되지 않음
class Lock{
    constructor(){
        this._locked = false
        this._waiting = []
    }

    lock(){
        const unlock = () => {
            let nextResolve
            if (this._waiting.length > 0){
                nextResolve= this._waiting.pop(0)
                nextResolve(unlock)
            } else {
                this._locked = false
            }
        }

        if (this._locked){
            return new Promise(resolve => {
                this._waiting.push(resolve)
            })
        } else {
            this._locked = true
            return new Promise(resolve => {
                resolve(unlock)
            })
        }
    }
}

const lock = new Lock()
lock.lock()
lock.lock()
lock.lock()
lock.lock()
lock.lock()