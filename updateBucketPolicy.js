import { PutBucketPolicyCommand, S3Client } from '@aws-sdk/client-s3'
import dotenv from 'dotenv'

dotenv.config() // enable accsess to .env variables
const client = new S3Client({})

export const updateBucketPolicy = async () => {
  const bucketName = process.env.AWS_BUCKET_NAME //bucket name from dotenv file

  // command to add policy to bucket
  const command = new PutBucketPolicyCommand({
    Policy: JSON.stringify({
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'PublicReadGetObject', // this is the identifier for the policy which allows public read access
          Effect: 'Allow',
          Principal: '*', //this will enable public acesss to all files
          Action: 's3:GetObject',
          Resource: `arn:aws:s3:::${bucketName}/*`, // bucket name from dotenv file
        },
      ],
    }),
    Bucket: bucketName,
  })

  try {
    const response = await client.send(command) //send the command to aws
    console.log(response)
  } catch (err) {
    console.error(err)
  }
}

updateBucketPolicy() // run the function
