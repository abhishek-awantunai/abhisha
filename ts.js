const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');

const client = new textToSpeech.TextToSpeechClient();

async function synthesizeText(text, outputFile) {
    const request = {
        input: { text },
        voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
        audioConfig: { audioEncoding: 'MP3' },
    };

    const [response] = await client.synthesizeSpeech(request);
    fs.writeFile(outputFile, response.audioContent, 'binary', err => {
        if (err) {
            console.error('Error writing audio file:', err);
            return;
        }
        console.log(`Audio content written to file: ${outputFile}`);
    });
}

synthesizeText('Hello, how are you?', 'output.mp3');