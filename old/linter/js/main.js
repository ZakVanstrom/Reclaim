let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

document.write(`${story}<br><br>`)

let ouWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
let storyLength = storyWords.length;

betterWords = storyWords.filter( word => {
  let isGood = ouWords.every(ou => !word.includes(ou))
  return isGood;
})

let badCount = 0;
storyWords.forEach(word => {
  let isGood = false;
  isGood = unnecessaryWords.every( unnWord => !word.includes(unnWord));
  isGood ? null : badCount++;
});

let sentenceMark = ['.', '!', '?'];
let sentenceCount = 0;
storyWords.forEach(word => {
  let notEnd = false;
  notEnd = sentenceMark.every( mark => !word.includes(mark));
  notEnd ? null : sentenceCount++;
});

const log = (wordCount, sentenceCount, overusedCount) => {
  let arr = [[wordCount,'words'], [sentenceCount, 'sentences'], [overusedCount, 'overused words']];
  for(let i = 0; i < 3; i++) {
    document.write(`Your story has ${arr[i][0]} ${arr[i][1]}.<br>`);
  }
}

log(storyLength, sentenceCount, badCount);
