## How to host a static site in a S3 bucket using aws/sdk

This guide assume you have an aws account with relevant permissions.

When checking the settings have updated in the AWS console, please use
apple-shift-r to perform a hard reload which refreshes the browser cache for the
page

AWS DOCS LINK WHICH I REFERENCED FOR THIS.
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html

#### Starting Config

Open a new VS Code window. Create a folder called 'AWS_STATIC_SITE'

Run 'npm init -y' to create a package.json a your project.  
Add the "type": "module" key and value to the bottom of the package.json file.  
This is so we can work with modern javascript import synthax

Initialise a git repo using the 'git init' command

Run 'aws configure'. Fill in your  
AWS Access Key ID,  
AWS Secret Access Key,  
AWS Default region name,  
Default output format should be 'json'.

Install dotenv by running 'npm install dotenv'

Create file called '.env' in the root folder with the following info, remove the
curly braces! The bucket name must be unique across the aws service!  
AWS_ACCOUNT_ID={AWS ACCOUNT ID HERE}  
AWS_IAM_USER={AWS IAM USER_NAME_HERE}  
AWS_ACCESS_KEY_ID={AWS ACCESS KEY HERE}  
AWS_SECRET_ACCESS_KEY_ID={AWS SECRET ACCESS KEYHERE}  
AWS_BUCKET_NAME={AWS BUCKET NAME HERE} The AWS_BUCKET_NAME must be url firendly.
I sguggest using lower case letters and dashes only.

Add a file called '.gitignore'  
add 'node_modules/' and '.env' to your git ignore file on separate lines

Run 'npm install @aws-sdk/client-s3'

#### Add Html File for static site

Add a folder in the root called assets. This will be the folder in which we
store our static site.

Add a file inside the assets folder called index.html.  
Copy the html code in my assets/index.html file or create your own.

#### Create Bucket

Create a file called 'createBucket.js' in the root folder  
Copy the contents of my createBucket.js  
This will file will create a bucket.  
I have added comments to the file to explain what the code does.

Run 'node createBucket.js'  
You should recieve the message 'Bucket created with location
http://AWS_BUKCET_NAME.s3.amazonaws.com/'  
LOGIN TO THE AWS CONSOLE, GO TO THE S3 SECTION AND CHECK THE BUCKET HAS APPEARED

#### Add Object To Bucket

Create a file called 'addObjectToBucket.js' in the root folder  
Copy the contents of my addObjectToBucket.js  
I have added comments to the file to explain what the code does.

Run 'node addObjectToBucket.js'  
You should receive a object with a http status code of 200 as a response  
This indicates the file has been sucesfully added  
IN THE AWS S3 CONSOLE CLICK INTO THE BUCKET YOU HAVE MADE AND CHECK THE FILE IS
DISPLAYED IN THE OBJECTS TAB

#### Add Policy To Bucket

Create a file called 'addPolicyToBucket.js' in the root folder  
Copy the contents of my addPolicyToBucket.js  
This will file will create a policy to ensure the bucket can be read by the
public.  
I have added comments to the file to explain what the code does.

Run 'node addPolicyToBucket.js'  
You should receive a object with a http status code of 204 as a response  
This indicates the policy has been sucesfully added  
WITHIN YOUR BUCKET SETTINGS OF THE AWS S3 CONSOLE, CHECK THE PERMISSIONS TAB AND
CHECK YOU CAN SEE SOME JSON IN THE BUCKET POLICY SECTION OF THE PAGE

#### Enable Static Site Hosting

Create a file called 'setWebConfig.js' in the root folder  
Copy the contents of my setWebConfig.js  
This will file will create enable static web hosting I have added comments to
the file to explain what the code does.

Run 'node setWebConfig.js'  
You should receive a object with a http status code of 200 as a response  
This indicates the policy has been sucesfully added  
WITHIN YOUR BUCKET SETTINGS OF THE AWS S3 CONSOLE, CLICK THE PROPERTIES TAB
SCROLL TO THE BOTTOM OF THE PAGE AND CHECK STATIC WEB HOSTING IS ENABLED

#### Enable Public Access To Bucket

Create a file called 'enablePublicAccess.js' in the root folder  
Copy ther contents of enablePublicAccess.js  
This file will enable all public access to the bucket. This will enable public
access to the bucket.

Run 'node enablePublicAccess.js' This will enable full public acess to the
bucket.

Create a file called 'updateBucketPolicy.js' in the root folder  
Copy the contents of my updateBucketPolicy.js  
This will file will update th bucket policy to enable public access to the
files  
 I have added comments to the file to explain what the code does.

Run 'node updateBucketPolicy.js'  
You should receive a object with a http status code of 204 as a response  
This indicates the policy has been sucesfully added

WITHIN YOUR BUCKET SETTINGS OF THE AWS S3 CONSOLE, CLICK PERMISSIONS AND CHECK
THE PERMISSION OVERVIEW SAYS ACCESS PUBLIC  
------------YOU MAY HAVE TO WAIT A FEW MINS FOR THIS TO UPDATE----------

WITHIN YOUR BUCKET SETTINGS OF THE AWS S3 CONSOLE, CLICK PERMISSONS, SCROLL TO
THE BOTTOM, UNDER STATIC WEB HOSTING CLICK YOUR BUCKET WEBSITE END POINT.

YOUR STATIC SITE SHOULD OPEN THE INDEX PAGE YOU CREATED
