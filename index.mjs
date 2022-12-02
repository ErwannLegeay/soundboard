import soundboard from './src/soundboard.mjs'
import easymidi from 'easymidi'

const input = new easymidi.Input('VMini Out');

//const port = process.env.PORT || 8000;
//const app = express()

input.on('noteon', (msg) => {
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
    default:
      soundboard.play('pute-pute-pute');
      break;
  }
})

// log incoming requests
/*app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.json(Array.from(soundboard.soundList))
})
app.get('/play/:sound', (req, res) => {
    if (!soundboard.soundList.has(req.params.sound)) {
        res
            .status(404)
            .json({code: 404, message: `unknown sound '${req.params.sound}'`})
    } else {
        soundboard.play(req.params.sound)
        res
        .writeHead(200, {
            'Content-Length': Buffer.byteLength(''),
            'Content-Type': 'text/plain',
          })
          .end('')
    }
})
app.use(async (err, req, res, next) => {
    console.error(err.stack)
    res
        .status(500)
        .json({message: err.message, code: 500, label: "Internal Server Error"})
})

app.listen(port, () => {
    console.log(`Soundboard listening on port ${port}`)
    console.log(easymidi.getInputs());
})*/
