const Sentiment = require('sentiment');
const sentiment = new Sentiment();

const mockAPIResponse = (text) => {
    const { score, comparative } = sentiment.analyze(text);
    return {
        text,
        score,
        comparative
    };
};
