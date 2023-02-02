import S3 from "aws-sdk/clients/s3.js";

let config = {}

if(process.env.CYCLIC_APP_ID){
	console.log('ahppeingg!')
	config = {
		region: process.env.MY_REGION,
		credentials:{
			accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
			secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY
		}
	  }
}

console.log(process.env.CYCLIC_APP_ID, ' prod')


export const s3 = new S3(config); 