const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = ' Jake had a love-hate relationship with mornings. Mostly hate. So he bought The Thunder Rooster 5000, a high-tech alarm clock that promised to wake up “even the dead or your money back.”

It had 12 alarm tones, including:

“Fire Truck in a Metal Band”

“Angry Goose in Your Room”

“Your Mom Saying Your Full Name”

Jake set it for 7:00 AM with the :insertY: option. Then he went to bed like a man ready to conquer life.

At 6:59 AM, he was peacefully dreaming about floating toast when the alarm erupted like the gates of goose hell had opened. A honking barrage of fury screamed from the corner of his room.

Jake, convinced he was being attacked by demonic poultry, flailed out of bed, tripped over his laundry, punched his closet door, and knocked over a glass of water that landed directly on the alarm clock.

Silence.

Then it :insertz:.

Jake stood in soaked pajamas, blinking at the small remains of the Thunder Rooster.

He went back to bed and was two hours late for work.

His boss asked why.

Jake said, “My alarm clock exploded during a water attack.”

His boss gave him the day off because she was too confused to argue.';
const insertX = ['the rizzler', 'Big Daddy', 'ryan reynolds' , 'shrek'];
const insertY = ['Fire Truck in a Metal Band' , 'Angry Goose in Your Room' , 'Your Mom Saying Your Full Name'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away', 'turned into a super nova and floated away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Jake', name);
  }

  if (document.getElementById("UK").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}