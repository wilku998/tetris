export default (source: number) => {
    if(source < 2500){
        return [1, 500]
    }else if(source >= 2500 && source < 5000){
        return [2, 450]
    }else{
        return [3, 400]
    }
}