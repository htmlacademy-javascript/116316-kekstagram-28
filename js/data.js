import {
  getRandomList,
  getRandomListElement,
  createRandomIdFromRangeGenerator,
  getRandomInteger} from './utils.js';

const PhotosCount = {
  MIN: 1,
  MAX: 25,
};

const AvatarsCount = {
  MIN: 0,
  MAX: 6,
};

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const CommentsCount = {
  MIN: 0,
  MAX: 12,
};

const DESCRIPTIONS = [
  'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.',
  'Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений.',
  'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию',
  'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона',
  'За прошедшие годы текст Lorem Ipsum получил много версий',
  'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Travis Scott',
  'Pop Smoke',
  'Drake',
  'Eminem',
  'Mary J. Blige',
  'Hilary Duff',
];

const generatePhotoId = createRandomIdFromRangeGenerator(PhotosCount.MIN, PhotosCount.MAX);
const generatePhotoUrl = createRandomIdFromRangeGenerator(PhotosCount.MIN, PhotosCount.MAX);
const generateLikes = createRandomIdFromRangeGenerator(LikesCount.MIN, LikesCount.MAX);
const generateCommentId = createRandomIdFromRangeGenerator(CommentsCount.MIN, CommentsCount.MAX * PhotosCount.MAX);

const getPhotoUrl = () => `photos/${generatePhotoUrl()}.jpg`;
const getAvatarUrl = () => `img/avatar-${getRandomInteger(AvatarsCount.MIN, AvatarsCount.MAX)}.svg`;

const generateComment = () => (
  {
    id: generateCommentId(),
    avatar: getAvatarUrl(),
    message: getRandomList(MESSAGES).join(' '),
    name: getRandomListElement(NAMES),
  }
);

const generatePhoto = () => (
  {
    id: generatePhotoId(),
    url: getPhotoUrl(),
    description: getRandomList(DESCRIPTIONS).join(' '),
    likes: generateLikes(),
    comments: Array.from({length: getRandomInteger(CommentsCount.MIN, CommentsCount.MAX)}, generateComment),
  }
);

const generatePhotos = () => Array.from({length: PhotosCount.MAX}, generatePhoto);

export {generatePhotos};
