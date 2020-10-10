
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let mem=[];
    if (typeof matrix==="undefined") return mem;
    matrix.forEach((elem,index) => {
        if ((index+1)%2!=0) {
            mem=mem.concat(elem)}
            else {
                mem=mem.concat(elem.reverse())
            }})
  return mem;
}
