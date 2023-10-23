const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const client = new S3Client ({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: 'AKIA6M4ZKZMBRWZDKQG3',
        secretAccessKey: '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'
    }
})

const putObject = async (fileName, contentType) => {
    const command = new PutObjectCommand ({
        Bucket: 'discord-bucket-aws-clone',
        Key: `/uploads/nodejs-example/${fileName}`,
        ContentType: contentType
    })

    const url = await getSignedUrl (client, command)
    return url
}

const init = async () => {
    console.log ('url for uploading ', await putObject ('image-download.jpg', 'image/jpeg'))
}

init ()