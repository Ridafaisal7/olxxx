import { useState } from "react"
import { postAd } from "../config/firebase"
import { useNavigate } from "react-router-dom"

function PostAd() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [file, setFile] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const addData = async () => {
        setLoading(true)
        await postAd(title, description, price, file[0])
        setLoading(false)
        navigate('/')
    }

    return (<div style={{ marginTop: 80 }} className="postAdd">
        <h3 style={{ position: 'relative', left: 200, fontSize: 35 }}>Post Ad</h3>
        <input className="postAd" onChange={(e) => setTitle(e.target.value)} type="text" placeholder="TITLE" /><br /><br />
        <input className="postAd" onChange={(e) => setDescription(e.target.value)} type="text" placeholder="DESCRIPTION" /><br /><br />
        <input className="postAd" onChange={(e) => setPrice(e.target.value)} placeholder="PRICE" /><br /><br />
        <input className="postfile" onChange={(e) => setFile(e.target.files)} type="file" /><br /><br />
        {loading ? <img src='https://i.gifer.com/ZKZg.gif' width='20' />
            :
            <center> <button style={{ padding: 13, paddingLeft: 23, paddingRight: 23, fontSize: 20 }} className="btn" onClick={addData}>Submit</button> </center>
        }
    </div>)
}

export default PostAd