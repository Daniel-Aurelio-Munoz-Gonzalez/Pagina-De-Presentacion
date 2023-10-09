import {GrInstagram as IG} from "react-icons/gr";
import {TiSocialFacebookCircular  as FB} from "react-icons/ti";
import {TiSocialLinkedin as LN} from "react-icons/ti";
import {TiSocialGithub as GH} from "react-icons/ti";
import {AiOutlineWhatsApp as WS} from "react-icons/ai";
import {BiLogoTelegram as TEL} from "react-icons/bi";

export default function Footer(){
    return(
        <div className="flex flex-row w-full justify-evenly items-center text-black bg-secPink">
        {/* TODO: Poner los enlaces correspondientes a mis RS*/}
            <a className=" hover:bg-lightBlue hover:text-white hover:font-bold rounded-full w-fit p-3 h-fit;" href="" ><TEL size={30}/></a>
            <a className=" hover:bg-secGreen hover:text-white hover:font-bold rounded-full w-fit p-3 h-fit;" href=""><WS size={30}/></a>
            <a className=" hover:bg-[#1877F2] hover:text-white hover:font-bold rounded-full w-fit p-3 h-fit;" href=""><FB size={35}/></a>
            <a className=" hover:bg-secPinkH hover:text-white hover:font-bold rounded-full w-fit p-3 h-fit;" href=""><IG size={27}/></a>
            <a className=" hover:bg-[#0A66C2] hover:text-black hover:font-bold rounded-full w-fit p-3 h-fit;" href=""><LN size={30}/></a>
            <a className=" hover:bg-white hover:text-black hover:font-bold rounded-full w-fit p-3 h-fit;" href=""><GH size={35}/></a>
        </div>
    );
}