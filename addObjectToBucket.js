import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import fs from 'fs' // Node.js file system module
import dotenv from 'dotenv'

dotenv.config() // enable accsess to .env variables
const client = new S3Client({})

export const addObjectToBucket = async () => {
  const bucketName = process.env.AWS_BUCKET_NAME //bucket name from dotenv file
  const assetToUplaod = './assets/index.html' // name of the file to upload

  const fileContent = fs.readFileSync(assetToUplaod) // Node.js file system module reads the file

  //command to upload the file
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: 'index.html', //name of the file in the bucket
    Body: fileContent, // content of the file read by fs.readFileSync
    ContentType: 'text/html', // this ensures that the file is served as HTML in the browser rather than downloaded
  })

  try {
    const response = await client.send(command) // send command to AWS
    console.log(response)
  } catch (err) {
    console.error(err)
  }
}

addObjectToBucket() // run the function
