import { PutBucketWebsiteCommand, S3Client } from '@aws-sdk/client-s3'
import dotenv from 'dotenv'

dotenv.config() // enable accsess to .env variables
const client = new S3Client({})

export const setWebConfig = async () => {
  const bucketName = process.env.AWS_BUCKET_NAME //bucket name from dotenv file

  const command = new PutBucketWebsiteCommand({
    Bucket: bucketName, //bucket name from dotenv file
    WebsiteConfiguration: {
      ErrorDocument: {
        Key: 'error.html',
      },
      IndexDocument: {
        Suffix: 'index.html',
      },
    },
  })

  try {
    const response = await client.send(command) //send command to aws
    console.log(response)
  } catch (err) {
    console.error(err)
  }
}

setWebConfig()
