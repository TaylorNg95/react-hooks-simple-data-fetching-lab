// create your App component here
import { useEffect, useState } from "react"

function App() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if(loading === true){
        return <p>Loading...</p>
    } else return (
        <img src={data.message} alt='A Random Dog'></img>
    )
}

export default App