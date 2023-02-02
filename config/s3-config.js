import S3 from "aws-sdk/clients/s3.js";

let config = {}

if(process.env.PROD){
	console.log('ahppeingg!')
	config = {
		region: process.env.MY_REGION,
		credentials:{
			accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
			secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY
		}
	  }
}

console.log(process.env.PROD, ' prod')


export const s3 = new S3(config); 