export const beltane = `
  _______  _______  ___      _______  _______  __    _  _______        ___   _______ 
|  _    ||       ||   |    |       ||   _   ||  |  | ||       |      |   | |       |
| |_|   ||    ___||   |    |_     _||  |_|  ||   |_| ||    ___|      |   | |   _   |
|       ||   |___ |   |      |   |  |       ||       ||   |___       |   | |  | |  |
|  _   | |    ___||   |___   |   |  |       ||  _    ||    ___| ___  |   | |  |_|  |
| |_|   ||   |___ |       |  |   |  |   _   || | |   ||   |___ |   | |   | |       |
|_______||_______||_______|  |___|  |__| |__||_|  |__||_______||___| |___| |_______|

`;
export const info =
  "Deze website is gemaakt door Beltane.io \n\n Meer informatie over deze website? Ga naar https://beltane.io voor meer informatie!";

export function createMessage(
  message: string,
  style = "font-weight: bold; background: radial-gradient(circle, rgba(90,0,217,1) 0%, rgba(0,212,255,1) 100%); -webkit-background-clip: text; color: transparent;"
) {
  console.log(`%c ${message}`, style);
  return;
}

export default function defaultConsoleMessage() {
  createMessage(beltane);
  createMessage(info);
}
