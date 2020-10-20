module.exports = function towelSort (matrix) {
  if(!matrix){
    return []
  }
  else{
    let result = []
    for(let i = 0; i < matrix.length; i++){
      if(i % 2 == 0){
        result = [...result, ...matrix[i]]
      }
      else{
        result = [...result, ...matrix[i].reverse()]
      }
    }
    return result;
  }
}
