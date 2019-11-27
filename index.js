exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello, I am a Lambda. I was deployed using Azure Pipelines'),
    };
    return response;
};
