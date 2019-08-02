const Player = (n, m) => {
  let name = n;
  let wins = 0;
  const mark = m;
  const defaultName = n;

  const rename = newName => (name = newName);
  const addWin = () => (wins += 1);

  const getName = () => name;
  const getMark = () => mark;
  const getWins = () => wins;
  const getDefaultName = () => defaultName;

  return { rename, getName, getMark, getWins, addWin, getDefaultName };
};

export default Player;
