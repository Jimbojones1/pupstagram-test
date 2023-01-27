import {useEffect, useState } from 'react'
import {create} from '../utils/likeApi'


export default function useAddLike(postId){

	const [data, setData] = useState({});
	const [error, setError] = useState('');

	useEffect(() => {

		async function addLike(){
			try {
				const response = await create(postId);
				setData(response.data)
			

			} catch(err){
				console.log(err, ' error in addLike')
				setError('error adding a like')
			}
		}

		addLike()


	}, [postId])

	return [error, data]

}