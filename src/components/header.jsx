import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div class="header-p">
                <p>📢Figma prototype testing just got a whole lot better! Readmore</p>

            </div>
            <header>
                <div className="container">
                    <div className="header-main">
                        <div className="header-logo">
                            <Link to="/"><img src="imges/logo.png" alt="" /></Link>
                        </div>
                        <div className="header-nav">
                            <nav>
                                <ul>
                                    <Link to="/Product"><li>Product</li></Link>
                                    <a href="/Customers"><li>Customers</li></a>
                                    <a href="/Pricing"><li>Pricing</li></a>
                                    <a href="/Resources"><li>Resources</li></a>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-btn">
                            <button className="btn1">Sing in</button>
                            <button className="btn2">Sing Up</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;