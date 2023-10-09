import ESCOM from "../assets/images/resulta.svg"
import LogoESCOM from "../pureComponents/LogoESCOM";
import LogoIPN from "../pureComponents/LogoIPN";
import MeCarousel from "./MeCarousel";


export default function Academic(){
    return(
        <div className="flex w-full justify-center items-center mt-[50px]">
            <div className="flex flex-row font-bold text-lg bg-secGreen w-full justify-evenly items-center p-10">
                <LogoESCOM/>
                <div className="w-[60%] text-center font-DMS">
                    <h2 className="text-4xl font-Sifonn mb-10">¿Quien soy?</h2>
                    <div className='w-full flex flex-row mt-10 text-left justify-between lg:h-[140px]'>
                        <MeCarousel/>
                    </div>
                    
                </div>
                <LogoIPN/>
                {/* <img src={IPN} alt="Escudo del IPN" className="h-[50px] w-[50px]"/> */}
            </div>
        </div>
    );
}