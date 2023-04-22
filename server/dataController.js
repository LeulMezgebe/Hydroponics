const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Hydrodata:Vikes23@hydroponicdata.rrapohr.mongodb.net/Hydroponicdata?retryWrites=true&w=majority';

async function fetchLatestData() {
    const mongoClient = new MongoClient(uri);

    try {
        await mongoClient.connect();
        const data = await mongoClient.db().collection('plcdata').find().sort({DateAndTime: -1}).limit(1).toArray();
        return data;
    } catch (error) {
        throw error;
    } finally {
        await mongoClient.close();
    }
}

async function fetchDataRange(startTime, endTime) {
    const mongoClient = new MongoClient(uri);

    try {
        await mongoClient.connect();
        const data = await mongoClient.db().collection('plcdata').find({DateAndTime: { $gte: startTime, $lte: endTime }}).toArray();
        return data;
    } catch (error) {
        throw error;
    } finally {
        await mongoClient.close();
    }
}

module.exports = {
    fetchLatestData,
    fetchDataRange
};
