import getContract from '@/abi/index'
const state={
    token:null
}
const mutations = {
    SET_COIN(state,{coinName,value}){
        state[coinName] = value
    }
}

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName("ERC20Factory", rootState.app.web3)
}

const actions = {
    newToken({rootState,commit},param){
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            let amount = param.totalSupply

            state.token.methods.newToken(param.manager,param.totalSupply,param.name,param.symbol).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}

