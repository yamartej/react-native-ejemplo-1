export async function getFreeGamesList() {
    const FREE_GAMES_API = 'https://www.freetogame.com/api/games';
    const rawData = await fetch(FREE_GAMES_API);
    const games = await rawData.json();
    return games;
}