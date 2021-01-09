import {useEffect, useState} from "react"
import {useHistory } from "react-router-dom"
import axios from "axios";

const Logout = () => {
    const history = useHistory();
    const [error, setError] = useState(null)

    useEffect(() => {
      axios.get('/api/logout').then((json) => {
          console.log("json.data", json.data);
        
        // if (json.data.message === 'logged out') 
        history.push('/signin')
      }).catch(e => {
        setError(e)
        console.log("🚀 ~ file: Logout.js ~ line 17 ~ axios.get ~ e", e)
      })
    }, [])
    if (error) return <div>Unable to logout</div>

    return <></>
  }

  export default Logout;
