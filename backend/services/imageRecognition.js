const tf = require('@tensorflow/tfjs-node');

const recognizeImage = async (imagePath) => {
    // Load pre-trained model
    const model = await tf.loadLayersModel('file://models/product_model/model.json');
    // Process image and predict
    const imageBuffer = fs.readFileSync(imagePath);
    const tensor = tf.node.decodeImage(imageBuffer).resizeNearestNeighbor([224, 224]).expandDims();
    const predictions = model.predict(tensor);
    const [predictedLabel] = predictions.argMax(-1).dataSync();

    // Map prediction index to product label
    const labels = ['Product A', 'Product B', 'Product C'];
    return labels[predictedLabel];
};

module.exports = { recognizeImage };