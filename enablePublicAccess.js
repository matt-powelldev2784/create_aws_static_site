import { S3Client, PutPublicAccessBlockCommand } from '@aws-sdk/client-s3'
import dotenv from 'dotenv'

dotenv.config() // enable accsess to .env variables
const client = new S3Client({})

const bucketName = process.env.AWS_BUCKET_NAME //bucket name from dotenv file

const params = {
  Bucket: bucketName,
  PublicAccessBlockConfiguration: {
    BlockPublicAcls: false, // Set to 'true' to block public access via ACLs
    IgnorePublicAcls: false, // Set to 'true' to ignore public access via ACLs
    BlockPublicPolicy: false, // Set to 'true' to block public access via bucket policies
    RestrictPublicBuckets: false, // Set to 'true' to restrict public access across all buckets
  },
}

export const enablePublicAccess = async () => {
  const command = new PutPublicAccessBlockCommand(params) //set public access using params
  try {
    const response = await client.send(command)
    console.log('Public access enabled for the S3 bucket:', response)
  } catch (err) {
    console.error('Error enabling public access:', err)
  }
}

enablePublicAccess()
