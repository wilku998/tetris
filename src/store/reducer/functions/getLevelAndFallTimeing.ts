export default (score: number) => {
    if(score < 2500){
        return [1, 500]
    }else if(score >= 2500 && score < 5000){
        return [2, 450]
    }else{
        return [3, 400]
    }
}