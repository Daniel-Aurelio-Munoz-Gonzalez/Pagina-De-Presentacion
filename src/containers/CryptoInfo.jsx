export default function CryptoInfo(){
    return(
        <div className="flex flex-col justify-center items-center text-white gap-10 mt-10">
            <h2 className="text-3xl font-Sifonn font-bold">Diferencial de Privacidad</h2>
            <h3 className="text-xl font-DMS font-bold">A mediados de la década de 2010 en adelante.</h3>
            <div className="w-[80%] font-DMS text-center flex flex-row gap-5">
                <p>
                    La diferencial de privacidad es una técnica que permite a los analistas y científicos obtener información útil de conjuntos de datos sin revelar información sensible o identificable sobre individuos específicos. Funciona al agregar un "ruido" matemático controlado a los datos antes de su análisis, lo que dificulta la identificación de individuos en el conjunto de datos. El ruido se ajusta de manera que los resultados generales sigan siendo útiles, pero la privacidad de los individuos esté protegida.
                </p>
                <p>
                    Este enfoque se popularizó en gran medida a partir de mediados de la década de 2010 cuando investigadores como Cynthia Dwork y Aaron Roth publicaron trabajos pioneros sobre el tema. Grandes empresas de tecnología comenzaron a adoptar la diferencial de privacidad para mejorar la privacidad de sus productos y servicios, mientras aún podían aprovechar los datos para mejorar la calidad de sus servicios y realizar investigaciones valiosas.
                </p>
                <p>
                    La diferencial de privacidad se ha convertido en un estándar en la protección de la privacidad en la era de la inteligencia artificial y la minería de datos, y ha sido adoptada en diversas aplicaciones, desde la publicidad en línea hasta la salud digital y la investigación científica. Su desarrollo y adopción han sido fundamentales para abordar las preocupaciones de privacidad en un mundo cada vez más conectado y orientado a los datos.
                </p>
            </div>
        </div>
    );
}