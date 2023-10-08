import CVpdf from "../assets/docs/CV - Muñoz González Daniel Aurelio.pdf"

export default function NavBar(){
    return(
        <div className="flex flex-row justify-between p-5">
            <div>Daniel Aurelio Muñoz González</div>
            <a className="bg-secAmar w-[10%]" href={CVpdf} target="_blank" download={CVpdf} rel="noreferrer">
                <div >
                    Descargar CV
                </div>
            </a>
            <a className="bg-secAmar w-[10%]" href={CVpdf} target="_blank" download={CVpdf} rel="noreferrer">
                <div >
                    Descargar Llave pública, por mientras solo muestra el CV
                </div>
            </a>            
        </div>
    );
}