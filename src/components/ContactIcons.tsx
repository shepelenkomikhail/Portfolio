import LinkedInIcon from "../assets/sm/linkedin.svg";
import GithubIcon from "../assets/sm/github.svg";
import FacebookIcon from "../assets/sm/facebook.svg";
import InstagramIcon from "../assets/sm/instagram.svg";
import TwitterIcon from "../assets/sm/twitter.svg";
import MLSZIcon from "../assets/sm/ball.svg";

export default function ContactIcons() {
    return (
        <div className="flex flex-row gap-5 items-center 2xl:gap-8">
            <a href="https://www.linkedin.com/in/shepelenkomykhailo/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn"/>
            </a>
            <a href="https://github.com/shepelenkomikhail" target="_blank" rel="noopener noreferrer">
                <img src={GithubIcon} alt="GitHub"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100007209124424" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/shepelenkomikhail/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" className="scale-110"/>
            </a>
            <a href="https://twitter.com/ssshepelenko" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Twitter" className="scale-110" />
            </a>
            <a href="https://ada1bank.mlsz.hu/player?itemId=1419545" target="_blank" rel="noopener noreferrer">
                <img src={MLSZIcon} alt="MLSZ Player Profile"/>
            </a>
        </div>
    );
}
