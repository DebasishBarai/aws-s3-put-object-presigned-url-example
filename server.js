const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const client = new S3Client ({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: 'AKIA6M4ZKZMB42LGZ46G',
        secretAccessKey: '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'
    }
})

const putObject = async (fileName, contentType) => {
    const command = new PutObjectCommand ({
        Bucket: 'discord-clone-aws',
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