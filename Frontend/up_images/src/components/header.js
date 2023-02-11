const logo1 =  require('./images/devchallenges.png');

const Header = () => {
    return(
        <header>
            <div id="logo">
                <img srcSet={logo1} alt="logo" />
            </div>
            <nav id="menu">
                <ul>
                    <li>Home</li>
                    <li>Upload Files</li>
                </ul>
            </nav>
        </header> 
    )
       
};


export default Header;