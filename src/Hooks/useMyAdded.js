import { useEffect, useState } from "react";
import {axiosInstance} from '../Api/AxiosInstance';


const useMyAdded = (urlpath) => {

    const [books, setData] = useState();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()



    useEffect(() => {

       let mainPath = 'allbooks';
       if(urlpath) {
        mainPath = `${mainPath}/${urlpath}`
       }

        const run = async () => {
            setLoading(true)
            try {

                const { status, data } = await axiosInstance.get(mainPath)
                
                if (status === 200) {
                    setData(data)
                    setLoading(false)
                    setError(' ')
                }
            }
            catch{
                setError(error)
            }

        }

        run()
    }, [urlpath])


    return {
        books,
        loading,
        error
    }
};

export default useMyAdded;