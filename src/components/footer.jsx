



const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-main">
                        <div className="footer-logo">
                            <img src="imges/logo.png" alt="Logo" />
                        </div>
                        <div className="footer-ul-li-main">
                            <div className="footer-product">
                                <ul>
                                    <li style={{ fontWeight: 'bolder', listStyle: 'none' }}>Product</li>
                                    <li>Overview</li>
                                    <li>Pricing</li>
                                    <li>Research panel</li>
                                    <li>Customers</li>
                                    <li>Status page</li>
                                </ul>
                            </div>
                            <div className="footer-card">
                                <ul>
                                    <li style={{ fontWeight: 'bolder', listStyle: 'none' }}>Card sorting</li>
                                    <li>Prototype testing</li>
                                    <li>First click tests</li>
                                    <li>Preference tests</li>
                                    <li>Five second tests</li>
                                    <li>Design surveys</li>
                                </ul>
                            </div>
                            <div className="footer-resources">
                                <ul>
                                    <li style={{ fontWeight: 'bolder', listStyle: 'none' }}>Resources</li>
                                    <li>Blog</li>
                                    <li>Testing guides</li>
                                    <li>Help center</li>
                                    <li>Contact</li>
                                    <li>Careers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
