// Hulpprogramma functies voor het coderen en decoderen van Base64
const Base64Utils = {
  encode: function (text) {
    return btoa(unescape(encodeURIComponent(text)));
  },
  decode: function (base64) {
    return decodeURIComponent(escape(atob(base64)));
  }
};

// Originele ASCII-kunst gecodeerd in Base64
const beltaneEncoded = Base64Utils.encode(`
  _______  _______  ___      _______  _______  __    _  _______        ___   _______ 
|  _    ||       ||   |    |       ||   _   ||  |  | ||       |      |   | |       |
| |_|   ||    ___||   |    |_     _||  |_|  ||   |_| ||    ___|      |   | |   _   |
|       ||   |___ |   |      |   |  |       ||       ||   |___       |   | |  | |  |
|  _   | |    ___||   |___   |   |  |       ||  _    ||    ___| ___  |   | |  |_|  |
| |_|   ||   |___ |       |  |   |  |   _   || | |   ||   |___ |   | |   | |       |
|_______||_______||_______|  |___|  |__| |__||_|  |__||_______||___| |___| |_______|
`);

// Informatie string
export const info =
  "Deze website is gemaakt door Beltane.io \n\n Meer informatie over deze website? Ga naar https://beltane.io voor meer informatie!";

// Functie om berichten te creëren
export function createMessage(
  encodedMessage,
  style = "font-weight: bold; background: radial-gradient(circle, rgba(90,0,217,1) 0%, rgba(0,212,255,1) 100%); -webkit-background-clip: text; color: transparent;"
) {
  // Decodeer het bericht voor het loggen
  const message = Base64Utils.decode(encodedMessage);
  console.log(`%c ${message}`, style);
  return;
}

// Functie die standaard console berichten creëert
export default function defaultConsoleMessage() {
  createMessage(beltaneEncoded); // Gebruik de gecodeerde ASCII-kunst
  createMessage(Base64Utils.encode(info)); // Codeer en decodeer info voor consistentie
}
