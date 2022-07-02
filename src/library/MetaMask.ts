export const GetAddress = async () => {
    const windowRef: any = window
    if (typeof windowRef.ethereum != "undefined" ) {
        try {
            const res = await windowRef.ethereum.request({ method: "eth_requestAccounts" });
            if (res.length > 0) return { status: 200, message: res[0]}
            return { status: 402, message: '先登入你的MetaMask啦'}
        } catch(e) {
            if (e.code == -32002) return { status: 401, message: '先登入你的MetaMask啦'}
            return { status: 401, message: '授權啦幹'}
        }
    } else return { status: 404, message: '先安裝MetaMask外掛啦幹' }
}