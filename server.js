const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const client = new S3Client ({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
})

const putObject = async (fileName, contentType) => {
    const command = new PutObjectCommand ({
        Bucket: 'discord-clone-aws',
        Key: `/uploads/nodejs-example/${fileName}`
    })

    const url = await getSignedUrl (client, command)
    return url
}

const init = async () => {
    console.log ('url for uploading ', await putObject ('image-download.png', 'image/png'))
}

init ()