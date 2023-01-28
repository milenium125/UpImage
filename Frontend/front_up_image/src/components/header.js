import logo from '../../public/images/';


const Header= () => {
    return (
        <div>
            <header>
            <div id='logo'>
                <img src={logo} alt="UpImage"/>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Upload Images</li>
                </ul>
            </nav>
        </header>
        </div>
        
    );
}

export default Header;