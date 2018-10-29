const initState = {
}

export default function (state = initState, action) {
    switch (action.type) {
        case 'CONTRACTADDR':
            return {
                ...state,
                BCACContractAddr: action.BCACContractAddr,
                DAECContractAddr: action.DAECContractAddr
            }
        default:
            return state
    }
}