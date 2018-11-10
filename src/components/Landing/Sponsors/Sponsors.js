/* eslint-disable */

import React, {Component} from 'react';
import AmazonGiga from 'assets/sponsors/Amazon-GIGA/Amazon-GIGA.svg';
import UCSCGradDivGiga from 'assets/sponsors/UCSC Grad Division - GIGA/GRADDIVLOGO.png'
import BSOEKilo from 'assets/sponsors/BSOE - KILO/baskin-logo-stacked-wht.png';
import LookerKilo from 'assets/sponsors/Looker - KILO/Web_Looker_Logo_Charcoal (1).png';
import PlantronicsKilo from 'assets/sponsors/Plantronics-KILO/PLT_Lava-box_Logo_2-in_15SEP15.png';
import ProductOpsKilo from 'assets/sponsors/ProductOps-KILO/grey and white versions/vertical_white.svg';
import SouthSwellKilo from 'assets/sponsors/South Swell Ventures-KILO/SouthSwellVentures_logo-2.png'
import ChooseSCCenti from 'assets/sponsors/Choose Santa Cruz-CENTI/ChooseSantaCruz-Diamond Artwork.png'
import MLHPartner from 'assets/sponsors/MLH - PARTNER/mlh-logo-white.svg'
import ChallengeRocketPartner from 'assets/sponsors/Challenge Rocket - PARTNER/challengerocket_logo_color_rgb.png'
import UCSCArtsKilo from 'assets/sponsors/UCSC Arts Division - KILO/artsdivision-logo.png'
import SCTBPartner from 'assets/sponsors/Santa Cruz Tech Beat - PARTNER/SCTB-logo.png'

class Sponsors extends Component {
  render() {
    return (
     <div className="sponsors__container"> 
      <h2 className="sponsors__title">Thank You to Our Wonderful Sponsors</h2>
      <div className="sponsors__logos gigas">
        <div className="sponsors__giga">
          <a href="https://graddiv.ucsc.edu" target = "_blank">
          <img src={UCSCGradDivGiga} alt="UCSC Graduate Division" height="200px" width="500px"/>
          </a>
        </div>
        <div className="sponsors__giga">
          <a href="https://aws.amazon.com/education/awseducate/" target = "_blank">
          <img src={AmazonGiga} alt="Amazon" height="200px" width="500px"/>
          </a>
        </div>
      </div>          
      <div className="sponsors__logos kilos">
        <div className="sponsors__kilo">
          <a href="https://www.bsoe.ucsc.edu" target = "_blank">
          <img src={BSOEKilo} alt="Baskin School of Engineering" height="100px" width="225px"/>
          </a>
        </div>
        <div className="sponsors__kilo">
          <a href="http://arts.ucsc.edu" target = "_blank">
          <img src={UCSCArtsKilo} alt="UCSC Arts" height="100px" width="225px"/>
          </a>
        </div>
        <div className="sponsors__kilo">
          <a href="https://looker.com/" target = "_blank">
          <img src={LookerKilo} alt="Looker" height="100px" width="225px"/>
          </a>
        </div>
        <div className="sponsors__kilo">
          <a href="https://www.productops.com/" target="_blank">
          <img src={ProductOpsKilo}  alt="ProductOps" height="100px" width="225px"/>
          </a>
        </div>
        <div className="sponsors__kilo">
          <a href="https://www.plantronics.com" target="_blank">
          <img src={PlantronicsKilo}  alt="Plantronics" height="100px" width="225px"/>
          </a>
        </div>
        <div className="sponsors__kilo">
          <a href="https://www.santacruzworks.org/members/south-swell-ventures" target="_blank">
          <img src={SouthSwellKilo}  alt="South Swell Ventures" height="100px" width="225px"/>
          </a>
        </div>
      </div>
      <div className="sponsors__logos centis">
        <div className="sponsors__centi">
          <a href="https://choosesantacruz.com/" target="_blank">
          <img src={ChooseSCCenti}  alt="Choose Santa Cruz" height="100px"/>
          </a>
        </div>
      </div>
      <h2 className="sponsors__title">and Our Great Partners</h2>
      <div className="sponsors__logos partners">
        <div className="sponsors__partner">
          <a href="https://mlh.io/" target="_blank">
          <img src={MLHPartner}  alt="Major League Hacking" width="225px" height="110px"/>
          </a>
        </div>
        <div className="sponsors__partner">
          <a href="https://challengerocket.com/" target="_blank">
          <img src={ChallengeRocketPartner}  alt="Challenge Rocket" width="225px" height="110px"/>
          </a>
        </div>
        <div className="sponsors__partner">
          <a href="http://santacruztechbeat.com/" target="_blank">
          <img src={SCTBPartner}  alt="Santa Cruz Tech Beat" width="225px" height="110px"/>
          </a>
        </div>
      </div>
    </div>
    );
  }
}

export default Sponsors;
