const speech = require('@google-cloud/speech').v1p1beta1;
const fs = require('fs');

const client = new speech.SpeechClient();

async function recognizeSpeech(filename) {
    const file = fs.readFileSync(filename);
    const audioBytes = file.toString('base64');

    const audio = {
        content: audioBytes,
    };

    const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
    };

    const request = {
        audio: audio,
        config: config,
    };

    const [response] = await client.recognize(request);
    const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
    console.log('Transcription:', transcription);
}

recognizeSpeech('audio.wav');
