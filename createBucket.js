import { S3Client, CreateBucketCommand } from '@aws-sdk/client-s3'
import dotenv from 'dotenv'

dotenv.config() // enable accsess to .env variables
const client = new S3Client({}) // add new S3Client instance

export const createBucket = async () => {
  const bucketName = process.env.AWS_BUCKET_NAME //bucket name from dotenv file

  // command to create bucket
  const command = new CreateBucketCommand({
    Bucket: bucketName,
  }) // create bucket command

  try {
    const { Location } = await client.send(command) // send command to AWS
    console.log(`Bucket created with location ${Location}`)
  } catch (err) {
    console.error(err)
  }
}

createBucket() // run the function
