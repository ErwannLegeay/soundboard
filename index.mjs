import soundboard from './src/soundboard.mjs'
import easymidi from 'easymidi'

const device = easymidi.getInputs()[1];
const input = new easymidi.Input(device);

input.on('noteon', (msg) => {
	console.log(msg);
  switch(msg.note) {
    case 3:
      soundboard.play('allahu');
      break;
    case 43:
      soundboard.play('na');
      break;
    case 44:
      soundboard.play('hahahawtf');
      break;
    case 45:
      soundboard.play('wtf-sound');
      break;
    case 46:
      soundboard.play('mon-reuf');
      break;
    case 47:
      soundboard.play('nul-nul-nul');
      break;
    case 48:
      soundboard.play('arretez');
      break;
    case 49:
      soundboard.play('arthour');
      break;
    case 50:
      soundboard.play('gigantesque-tarlouze');
      break;
    case 51:
      soundboard.play('boire-godet');
      break;
    case 52:
      soundboard.play('charge-decharge');
      break;
    case 53:
      soundboard.play('guitare-tourteau');
      break;
    case 54:
      soundboard.play('millions-larmina');
      break;
    case 55:
      soundboard.play('pas-jouer');
      break;
    case 56:
      soundboard.play('covid');
      break;
    case 57:
      soundboard.play('julienlepers-oui');
      break;
    case 58:
      soundboard.play('julienlepers-cestnon');
      break;
    case 59:
      soundboard.play('motus-boule-noire');
      break;
    case 60:
      soundboard.play('sel-francais');
      break;
    case 61:
      soundboard.play('souffrir');
      break;
    case 62:
      soundboard.play('ta-gueule-1');
      break;
    case 63:
      soundboard.play('ta-gueule-2');
      break;
    case 64:
      soundboard.play('zemmour-tousse');
      break;
    case 65:
      soundboard.play('zdedededex');
      break;
    case 66:
      soundboard.play('seth-guex-blaksh');
      break;
    case 67:
      soundboard.play('seth-gueko-piece-jointe');
      break;
    case 68:
      soundboard.play('zblerksh');
      break;
    case 69:
      soundboard.play('kaaris-27');
      break;
    case 70:
      soundboard.play('kaaris-puuteuh');
      break;
    case 71:
      soundboard.play('kaaris-sevran');
      break;
    case 72:
      soundboard.play('kaaris-men-bat-les-couilles-frere');
      break;
    case 73:
      soundboard.play('kalash-sauvagerie');
      break;
    case 74:
      soundboard.play('ekip');
      break;
    case 75:
      soundboard.play('pute-pute-pute');
      break;
    default:
      soundboard.play('dj-horn');
      break;
  }
});