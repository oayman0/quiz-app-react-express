const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());


const getRandomWordsWithAllPos = (wordList) => {
  const getRandomWord = () => wordList[Math.floor(Math.random() * wordList.length)];

  const selectedWords = [];
  const usedPos = new Set();
  const usedIds = new Set();

  while (usedPos.size < 4) {
    const word = getRandomWord();
    if (!usedPos.has(word.pos)) {
      selectedWords.push(word);
      usedPos.add(word.pos);
      usedIds.add(word.id);
    }
  }

  while (selectedWords.length < 10) {
    const word = getRandomWord();
    if (!usedIds.has(word.id)) {
      selectedWords.push(word);
      usedIds.add(word.id);
    }
  }

  return selectedWords;
};

app.get('/words', (req, res) => {
  const testData = JSON.parse(fs.readFileSync('TestData.json'));
  const wordList = testData.wordList;

  const selectedWords = getRandomWordsWithAllPos(wordList);
  res.json(selectedWords);
});


const calculateRank=(finalScore,scoresList)=>{
  const sortedScores = scoresList.slice().sort((a, b) => a - b);
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
return (Math.round(rank * 100) / 100);
}

  app.post('/rank', (req, res) => {
    const testData = JSON.parse(fs.readFileSync('TestData.json'));
    const scoresList = testData.scoresList;
    const finalScore = req.body.finalScore;
    const rank =calculateRank(finalScore,scoresList);
    res.json({ rank: rank });
  });
  
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});








