import '../css/Working.css'
import { Link } from 'react-router-dom'
import IMG from '../images/img1.jpg';

const Working = () => {
    
    return (
        <div className='Outer-layer'>

            <div className='Outer-layer1'>

                <div className='text-area'>
                    <h1>How It Works</h1>
                    <Link to='/' className=''>For Seekers</Link>
                    <Link to='/' className=''>For Providers</Link>
                </div>

                <div className="section-area">

                    <section className="work-sec">
                        <div className="cards">
                            <img src="`https://via.placeholder.com/100x100`" alt="" />
                        </div>
                        <h2>Create a Listing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quos illo voluptate nisi numquam aliquid animi unde error exercitationem minus corporis iusto, quasi nemo? Veritatis ducimus non corrupti velit explicabo?</p>
                    </section>

                    <section className="work-sec">
                        <div className="cards">
                            <img src="`https://via.placeholder.com/100x100`" alt="" />
                        </div>
                        <h2>Create a Listing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quos illo voluptate nisi numquam aliquid animi unde error exercitationem minus corporis iusto, quasi nemo? Veritatis ducimus non corrupti velit explicabo?</p>
                    </section>

                    <section className="work-sec">
                        <div className="cards">
                            <img src="`https://via.placeholder.com/100x100`" alt="" />
                        </div>
                        <h2>Create a Listing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quos illo voluptate nisi numquam aliquid animi unde error exercitationem minus corporis iusto, quasi nemo? Veritatis ducimus non corrupti velit explicabo?</p>
                    </section>
                </div>
            </div>

            <div className="Outer-layer2">
                <div className="outer-layer-text">
                    <h1>Join today and become the part of our growing community</h1>
                    <button>Sign up now</button>
                </div>
                <img src={IMG} alt='image' />
            </div>
        </div>
    )
}

export default Working
