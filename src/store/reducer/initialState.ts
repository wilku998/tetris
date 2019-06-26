import generateBlockFunc from "./functions/generateBlockFunc";

export default {
  blocks: [generateBlockFunc()],
  gameOver: false,
  pause: true,
  source: 0,
  level: 1,
  fallTimeing: 500,
  menuScreenVisible: true,
  record: 0
};
