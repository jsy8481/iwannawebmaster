'use strict'
// 잘 알려진 Symbol.iterator 심볼은 객체에 대응하는 기본 이터레이터를 지정합니다.
// for...of와 같이 사용됩니다.
// 
class Sample{
    // Computed Property
    // 아래와 같이 iterator를 작성하면 Array.from(), ..., for of 활용 가능
    *[Symbol.iterator]() {
        let cnt = 0
        yield ++cnt
    }
}

const fn = new Sample()
// const gn = fn.gen()

// console.log(gn.next())
// console.log(gn.next())
// console.log(gn.next())
// console.log(gn.next())
// console.log(gn.next())

console.log(Array.from(fn))

class DatabaseManager{
    constructor(settings){
        this.settings = settings
        this.init = init // Pending 상태의 Promise를 말함
        // Promise cache 한 번 resolve된 promise는 다시 실행되지 않음
        // 아래의 newmember, deletemember 함수에서 init은 단 한 번 실행된다.
        // 그러나 init이 반복되어 계속 나타남으로 이는 -> 수정이 필요하다.
    }

    query(){
        // QUERY('') Agnostic
    }

    async init(){

    }

    async newMember(){
        await this.init()
    }

    async deleteMember(){
        await this.init()
    }
}

// constructor에서는 비동기 코드를 사용하지 못하기에, 
// 생성자를 호출할 static method를 정의해서 이용한다.

class StaticDatabaseManager{
    constructor(settings){
        this.settings = settings
        // 동기 작업은 그대로 constructor에서 해주면 되겠군
    }

    static async BUILD(settings){
        const config = await this.init(settings)
        // 수행하고자 하는 모든 비동기 작업
        return new StaticDatabaseManager(config)
    }

    query(){
        // QUERY('') Agnostic
    }

    static async init(settings){

    }

    async newMember(){
        await this.init()
    }

    async deleteMember(){
        await this.init()
    }
}

const manager = StaticDatabaseManager.BUILD('settings')



