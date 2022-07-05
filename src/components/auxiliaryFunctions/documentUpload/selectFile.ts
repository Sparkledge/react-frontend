/*
    The selectFile function handles choosing the material to upload
*/

const selectFile = async(
    e:any, 
    setFile: (newFile: any) => void,
    setWarning: (newWarning: string) => void,
    setIsFileLoaded: (newState: number) => void
) => {
    if(!(e.target.files && e.target.files.length > 0)) setFile(null);
    else{
        setWarning("");
        const forStoring = e.target.files[0];
        if(forStoring.type !== "application/pdf") {
            setFile(null);
            setWarning("Dozwolone wyłącznie pliki PDF");
        }
        else if(forStoring.size /(1024*1024) > 50){
            setFile(null);
            setWarning("Plik nie może przekroczyć 50MB");
        }
        else {
            setFile(forStoring);
            setIsFileLoaded(1);
        }
    }
};

export default selectFile;