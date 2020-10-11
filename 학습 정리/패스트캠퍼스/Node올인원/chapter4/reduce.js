'use strict'

const arr = ['pdf', 'html', 'html', 'gif', 'gif', 'gif']

const res = arr.reduce((tot, cur) => {
    
    if (cur in tot){
        tot[cur] += 1
    } else{
        tot[cur] = 1
    }

    return tot
}, {})

console.log(res)