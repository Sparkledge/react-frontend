import React, {useState, useEffect, createRef} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "../../styled/subpages/welcome";
import { DocumentUploadFormWrapper, DocumentUploadFormHeader,
    DocumentUploadFormDataSection, DocumentUploadNotWorking, DocumentUploadTextInput,
    DocumentUploadNextButton, DocumentUploadDataSubSection, DocumentUploadFileHeader, DocumentUploadFileInput,
    DocumentUploadFileDescription, DocumentUploadFileButton } from "../../styled/subpages/documentUpload";

import { RootState } from "../../redux/mainReducer";

import SearchBarComponent from "../helperComponents/searcher/searchBarComponent";

const BackgroundPattern = require("../../assets/pattern_background5.webp");

const DocumentUpload:React.FC = () => {

    const currentToken:string = useSelector((state: RootState) => state.generalData.currentToken);

    const [isWorking, toggleIsWorking] = useState<boolean>(true);
    const [phaseNumber, setPhaseNumber] = useState<number>(1); // 1 - name, 2 - category 3- file & upload, 4 - file uploaded
    const [materialName, setMaterialName] = useState<string>("");
    const [file, setFile] = useState<any>(null);
    const [isFileLoaded, setIsFileLoaded] = useState<number>(0); // 0 - status unknown, 1 - loaded, 2 - problems occured
    const [desc, setDesc] = useState<string>("");
    const [warning, setWarning] = useState<string>("");
    const [documentId, setDocumentId] = useState<string>("");

    
    const [universitiesList, setUniversitiesList] = useState<any[]>([]);
    const [facultiesList, setFacultiesList] = useState<any[]>([]);
    const [programmesList, setProgrammesList] = useState<any[]>([]);

    const [searchedUniversity, setSearchedUniversity] = useState<string>("");
    const [searchedFaculty, setSearchedFaculty] = useState<string>("");
    const [searchedProgramme, setSearchedProgramme] = useState<string>("");
    const [searchedSemester, setSearchedSemester] = useState<number>(0); // 0 - nothing chosen
    const [searchedCourse, setSearchedCourse] = useState<string>("");

    const FileRef = createRef<HTMLInputElement>();


    useEffect(() => {
        axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/infrastructure/university`)
        .then((res) => {
            setUniversitiesList(res.data);
        })
        .catch(() => {
            toggleIsWorking(false);
        })
    }, []);

    useEffect(() => {
        if(searchedFaculty.length > 0) {
            setFacultiesList([]);

            const facultyID:string = universitiesList.filter((elem:any) => elem["name"] !== undefined && elem["name"] === searchedUniversity)[0]["faculties"]
            .filter((elem: any) => elem["name"] !== undefined && elem["name"] === searchedFaculty)[0]["_id"];

            const requestBody:Object = {
                "facultyId": facultyID
            }

            axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/infrastructure/faculty`, requestBody, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })
            .then((res) => {
                setFacultiesList(res.data.programmes)
            })
            .catch((err) => {
                console.log(err);
                toggleIsWorking(false);
            })

        }
    }, [searchedFaculty])

    useEffect(() => {
        if(searchedProgramme.length > 0){
            setProgrammesList([]);
            
            const programmeID:string = facultiesList.filter((elem:any) => elem["name"] !== undefined && elem["name"] === searchedProgramme)[0]["_id"];

            const requestBody:Object = {
                "programmeId": programmeID
            }

            axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/infrastructure/programme`, requestBody, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })
            .then((res) => {
                setProgrammesList(res.data.courses)
            })
            .catch((err) => {
                console.log(err);
                toggleIsWorking(false);
            })

        }
    }, [searchedProgramme])


    const selectFile = async(e:any) => {
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
    }

    const sendFile = async() => {
        const formData = new FormData();
        formData.append("title",materialName);
        formData.append("description", desc);
        formData.append("courseId", programmesList.filter((elem:any) => elem.name === searchedCourse)[0]["_id"]);
        formData.append("file",file);
        await axios.post(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/documents`, formData, {
            headers: {
                "Authorization": `Bearer ${currentToken}`,
                'Content-Type': 'multipart/form-data',
            }
        })
        .then((res) => {
            if(res.status === 201){
                setPhaseNumber(4);
                setDocumentId(res.data.id);
            }
        })
        .catch((err) => {
            toggleIsWorking(false);
        });
    }

    useEffect(() => {
        console.log(currentToken);
        toggleIsWorking(currentToken.length === 0 ? false : true);
    }, [currentToken])

    return <MainContainer className="block-center">
        <LandingSectionWrapper className="block-center" backgroundSize="initial" source={BackgroundPattern}
            backgroundRepeat="repeat">
            <LandingSectionFilter>
                <DocumentUploadFormWrapper className="block-center">
                    <DocumentUploadFormHeader className="block-center">
                        Tworzenie dokumentu
                    </DocumentUploadFormHeader>
                    <DocumentUploadFormDataSection className="block-center">
                        {
                            isWorking ? phaseNumber === 1 ? <>
                                <DocumentUploadTextInput type="text" placeholder="Jak nazwiesz ten materiał?"
                                    value={materialName} onChange={(e) => setMaterialName(e.target.value)}/>
                             </> : phaseNumber === 2 ? <DocumentUploadDataSubSection className="block-center">
                                <SearchBarComponent
                                    universities={universitiesList}
                                    faculties={facultiesList}
                                    programmes={programmesList}
                                    searchedUniversity={searchedUniversity}
                                    setSearchedUniversity={setSearchedUniversity}
                                    searchedFaculty={searchedFaculty}
                                    setSearchedFaculty={setSearchedFaculty}
                                    searchedProgramme={searchedProgramme} 
                                    setSearchedProgramme={setSearchedProgramme}
                                    searchedSemester={searchedSemester}
                                    setSearchedSemester={setSearchedSemester}
                                    searchedCourse={searchedCourse} 
                                    setSearchedCourse={setSearchedCourse}
                                    submitCallback={() => setPhaseNumber(3)}
                                    isBiggerScale={true}/>
                             </DocumentUploadDataSubSection>: phaseNumber === 3 ? <>
                                <DocumentUploadDataSubSection className="block-center">
                                    <DocumentUploadFileHeader className="block-center">
                                        {warning.length === 0 ? "Zamieść materiał" : warning}
                                    </DocumentUploadFileHeader>
                                    <DocumentUploadFileButton className="block-center" onClick={() => FileRef !== undefined && FileRef.current !== null ? FileRef.current.click() : null}>
                                        Wybierz
                                    </DocumentUploadFileButton>
                                    <DocumentUploadFileInput type="file" ref={FileRef}
                                        onChange={async(e:any) => await selectFile(e)}/>
                                    <DocumentUploadFileDescription className="block-center"
                                        onChange={(e:any) => setDesc(e.target.value)}></DocumentUploadFileDescription>
                                </DocumentUploadDataSubSection>
                                {
                                    isFileLoaded === 1 && programmesList.filter((elem:any) => elem.name === searchedCourse).length > 0? <DocumentUploadFileButton className="block-center" top={5}
                                        onClick={() => sendFile()}>
                                        Wyślij
                                    </DocumentUploadFileButton>: null
                                }
                             </> : <>
                                <DocumentUploadNotWorking className="block-center">
                                    Dokument został opublikowany.
                                </DocumentUploadNotWorking>
                                {documentId !== undefined && documentId.length > 0 ? <Link to = {`/document/${documentId}`}>
                                    <DocumentUploadNotWorking className="block-center">
                                        Link do dokumentu
                                    </DocumentUploadNotWorking>
                                </Link>: <></>}
                             </> : <DocumentUploadNotWorking className="block-center">
                                {currentToken.length === 0 ? "Zaloguj się, żeby wrzucić materiał" : "Coś poszło nie tak. Spróbuj ponownie"}
                            </DocumentUploadNotWorking>
                        }
                    </DocumentUploadFormDataSection>
                    <DocumentUploadNextButton className="block-center" scale={materialName.length === 0 || phaseNumber !== 1 ? 0 : 1}
                        onClick={() => setPhaseNumber(2)}>
                        <SwipeRightAltIcon style={{color: "inherit", fontSize: "inherit"}}/>
                    </DocumentUploadNextButton>
                </DocumentUploadFormWrapper>
            </LandingSectionFilter>
        </LandingSectionWrapper>
    </MainContainer>
};

export default DocumentUpload;