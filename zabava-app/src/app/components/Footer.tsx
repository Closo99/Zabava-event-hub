import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <footer>
                <div className="footer-tittles">
                <div className="footer-icons-localization">
                    </div>
                    <p><b>Endereço</b></p>
                    <div>                        
                    <text>9999 Somewhere Avenue, Executive Offices</text>                        
                    </div>
                    <div>
                    <text>Houston, XX 33333</text>
                    </div>        
                </div>

                <div className="footer-tittles">
                    <p><b>Siga nas redes sociais</b></p>
                    <div className="footer-icons-socialmedia">
                    <InstagramIcon />
                    <FacebookIcon />
                    <LinkedInIcon />
                    <TwitterIcon />
                    </div>
                </div>

                <div className="footer-tittles">
                    <p><b>Contato</b></p>
                    <div className="footer-icons">
                    <p>contatozabava@zabava.com</p>
                    </div>
                </div>                              
                </footer>
    );
};

export default Footer;