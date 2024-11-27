import LinkedInIcon from '../assets/linkedin.svg';
import GithubIcon from '../assets/github.svg';
import FacebookIcon from '../assets/facebook.svg';

export const HeaderIcons = () => {
  return (
      <div className="flex flex-row align-center gap-5">
          <a href={"https://www.linkedin.com/in/shepelenkomykhailo/"} target={"_blank"}>
              <img src={LinkedInIcon} alt="LinkedIn"/>
          </a>
          <a href={"https://github.com/shepelenkomikhail"} target={"_blank"}>
              <img src={GithubIcon} alt="GitHub"/>
          </a>
          <a href={"https://www.facebook.com/profile.php?id=100007209124424"} target={"_blank"}>
              <img src={FacebookIcon} alt="Facebok"/>
          </a>
    </div>
)
    ;
};