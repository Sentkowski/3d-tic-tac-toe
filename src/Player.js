const Player = (n) => {
    let name = n;

    const rename = (name) => name = name;

    const getName = () => name;

    return { rename, getName }
}

export default Player;