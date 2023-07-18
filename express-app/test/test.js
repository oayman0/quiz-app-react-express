const scoresList =  [
    20,
    90,
    100,
    50,
    10,
    50,
    60,
    0,
    60,
    10,
    90,
    30,
    100,
    30,
    20,
    90,
    40,
    20,
    10,
    60,
    50,
    100,
    50,
    80,
    50,
    80,
    60,
    80,
    10,
    40
]
const sortedScores = scoresList.slice().sort((a, b) => a - b);
const calc= (finalScore, sortedScores)=>{

    let low = 0;
    let high = sortedScores.length;
  
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
  
      if (sortedScores[mid] < finalScore) {
        low = mid + 1;
      } else {
        high = mid;
      }
    } 
    const rank = (low/ sortedScores.length) * 100;
    return rank
}

console.log(sortedScores,calc(0,scoresList))