'use strict'

// 첫 번째만 생성되고 나머지는 같은 instance를 반환함
class CacheManager{
    constructor(){
        if (!CacheManager.instance){
            this._cache = []
            CacheManager.instance = this
        }
        return CacheManager.instance
    }
}

const a = new CacheManager()
console.log(CacheManager)
