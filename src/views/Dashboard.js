import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAds } from '../config/firebase'

function Dashboard() {
    const [ads, setAds] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const addData = await getAds()
        setLoading(false)
        setAds(addData)
    }

    console.log('ads--->', ads)

    return (
        <div className="App">
            <header className="olx-header">

                <div className="olx-logo">
                    <img src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png" alt="OLX Logo" />
                </div>

                <div className='motor-logo'>
                    <span><img src="https://st.depositphotos.com/1826082/3755/v/450/depositphotos_37557945-stock-illustration-logo-of-auto.jpg" alt="OLX Logo" />
                        <p style={{ color: 'black', position: 'relative', left: 75, bottom: 52, fontSize: 13 }}>MOTORS</p></span>
                </div>

                <div>
                    <img width={55} style={{ position: 'relative', left: 90, bottom: 13 }} src='https://as2.ftcdn.net/v2/jpg/02/93/53/33/1000_F_293533330_pfr7Q11V5Vj3xQij2axBzytECXivoWqT.jpg' alt='BUILDING ' />
                    <p style={{ fontSize: 13, color: 'black', position: 'relative', left: 135, bottom: 55 }}>PROPERTY</p>
                </div>

                <div>
                    <img width={60} style={{ position: 'relative', right: 135, top: 55 }} src='https://www.logosvgpng.com/wp-content/uploads/2020/10/olx-logo-vector.png' alt='OLX Logo' />
                    <input style={{ padding: 14, paddingRight: 105, borderRadius: 4, position: 'relative', right: 120, top: 40 }} placeholder='Search City, Area or Locality' />
                    <input style={{ padding: 14, paddingRight: 450, borderRadius: 4, position: 'relative', right: 105, top: 40 }} placeholder='Find cars, mobile phones and more' />
                    <img className='search-olx' width={43} style={{ position: 'relative', right: 107, borderRadius: 4, top: 59 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThk78QWRv3iFKcrokcg3J_Q1W2lTlzrxs5plXlx6yuyXRp7ja8RaGjGjDlbtCU95rtL2U&usqp=CAU' alt='Serach Logo' />
                    <button className='olx-search' onClick={() => navigate('/postad')}>+ SELL</button>
                    <button className='olx-logout' onClick={() => navigate('/signin')}>Logout</button>
                </div>
            </header>

            <header>
                <div className='olx-category'>
                    <p style={{ display: 'inline' }}>All Categories</p>
                    <p style={{ display: 'inline' }}>Mobile phones</p>
                    <p style={{ display: 'inline' }}>Car</p>
                    <p style={{ display: 'inline' }}>Motorcycles</p>
                    <p style={{ display: 'inline' }}>Houses</p>
                    <p style={{ display: 'inline' }}>TV</p>
                    <p style={{ display: 'inline' }}>Tablets</p>
                </div>
            </header>

            <div>
                <center> <img style={{ margin: 5 }} width='90%' src='https://images.olx.com.pk/thumbnails/295176473-800x600.webp' /> </center>
            </div>

            <div>
                <center> <img style={{ margin: 5 }} width='50%' src='https://tpc.googlesyndication.com/simgad/10805802479742614563?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qmKOoy1XqIg-AWH4QLh2Y0vvBRlrw' /> </center>
            </div>

            <br />

            {loading ?
                <center><img src="https://i.gifer.com/ZKZg.gif" width='20' /></center>
                :
                ads.map(item => {
                    return <div className='card' style={{ display: "inline-block", width: '25%', margin: '10px', height: '350px', textAlign: 'center', borderRadius: '5px', textTransform: "capitalize" }} onClick={() => navigate('/postad/' + item.id)}>
                        <img src={item.imageUrl} width='250' />
                        <h4>{item.title}</h4>
                        <h4>$ {item.price}</h4>
                    </div>
                })}

            <footer className="olx-footer">
                <div className="olx-footer-content">

                    <div className="footer-section">
                        <h3>About OLX</h3>
                        <ul>
                            <li><a href="#">About OLX Group</a></li>
                            <li><a href="#">OLX Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">OLX for Businesses</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>OLX</h3>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">Legal & Privacy information</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="olx-footer-bar">
                    &copy; {new Date().getFullYear()} OLX. All rights reserved.
                </div>

            </footer>
        </div>
    )
}

export default Dashboard