let actions = {
    contractAddr(option) {
        return function (dispatch, getState) {
            dispatch({
                type: 'CONTRACTADDR',
                BCACContractAddr: option.BCACContractAddr,
                DAECContractAddr: option.DAECContractAddr
            })
        }
    }
}

export default actions