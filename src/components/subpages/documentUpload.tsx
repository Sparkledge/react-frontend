import React, { useState, useEffect, createRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "../../styled/subpages/welcome";
import {
  DocumentUploadFormWrapper, DocumentUploadFormHeader,
  DocumentUploadFormDataSection, DocumentUploadNotWorking, DocumentUploadTextInput,
  DocumentUploadNextButton, DocumentUploadDataSubSection, DocumentUploadFileHeader, DocumentUploadFileInput,
  DocumentUploadFileDescription, DocumentUploadFileButton, 
} from "../../styled/subpages/documentUpload";

import { RootState } from "../../redux/mainReducer";

import SearchBarComponent from "../helperComponents/searcher/searchBarComponent";

import sendFile from "../../connectionFunctions/documentUpload/sendFile";
import getProgrammeOrFacultyInfrastructure from "../../connectionFunctions/searcher/getProgrammeOrFacultyInfrastructure";
import loadUniversities from "../../connectionFunctions/documentUpload/loadUniversities";

import selectFile from "../auxiliaryFunctions/documentUpload/selectFile";

const BackgroundPattern = require("../../assets/pattern_background5.webp");

const DocumentUpload:React.FC = () => {
  const currentToken:string = useSelector((state: RootState) => state.generalData.currentToken);

  const [isWorking, toggleIsWorking] = useState<boolean>(true);
  const [isOnline, toggleIsOnline] = useState<boolean>(window.navigator.onLine);
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
    // loadUniversities(setUniversitiesList, toggleIsWorking);
    window.addEventListener("offline", () => toggleIsOnline(false));
    window.addEventListener("online", () => toggleIsOnline(true));
  }, []);

  useEffect(() => {
    if (searchedFaculty.length > 0) {
      getProgrammeOrFacultyInfrastructure(
        universitiesList, 
        setFacultiesList, 
        searchedFaculty,
        "faculty", 
        toggleIsWorking, 
        searchedUniversity, 
        true,
      );
    } 
  }, [searchedFaculty]);

  useEffect(() => {
    if (searchedProgramme.length > 0) {
      getProgrammeOrFacultyInfrastructure(
        facultiesList, 
        setProgrammesList, 
        searchedProgramme,
        "programme", 
        toggleIsWorking, 
        "",
        true,
      );
    }
  }, [searchedProgramme]);

  useEffect(() => {
    toggleIsWorking(currentToken.length !== 0);
  }, [currentToken]);

  return (
    <MainContainer className="block-center">
      <LandingSectionWrapper
        className="block-center"
        backgroundSize="initial"
        source={BackgroundPattern}
        backgroundRepeat="repeat"
      >
        <LandingSectionFilter>
          <DocumentUploadFormWrapper className="block-center">
            <DocumentUploadFormHeader className="block-center">
              Tworzenie dokumentu
            </DocumentUploadFormHeader>
            <DocumentUploadFormDataSection className="block-center">
              {
                            isWorking && isOnline ? phaseNumber === 1 ? (
                              <DocumentUploadTextInput
                                type="text"
                                placeholder="Jak nazwiesz ten materiał?"
                                value={materialName}
                                onChange={(e) => { setMaterialName(e.target.value); toggleIsOnline(navigator.onLine); }}
                              />
                            ) : phaseNumber === 2 ? (
                              <DocumentUploadDataSubSection className="block-center">
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
                                  isBiggerScale
                                />
                              </DocumentUploadDataSubSection>
                            ) : phaseNumber === 3 ? (
                              <>
                                <DocumentUploadDataSubSection className="block-center">
                                  <DocumentUploadFileHeader className="block-center">
                                    {warning.length === 0 ? "Zamieść materiał" : warning}
                                  </DocumentUploadFileHeader>
                                  <DocumentUploadFileButton
                                    className="block-center" 
                                    onClick={() => FileRef !== undefined && FileRef.current !== null 
                                      ? FileRef.current.click() : null}
                                  >
                                    Wybierz
                                  </DocumentUploadFileButton>
                                  <DocumentUploadFileInput
                                    type="file"
                                    ref={FileRef}
                                    onChange={async (e:any) => selectFile(e, setFile, setWarning, setIsFileLoaded)}
                                  />
                                  <DocumentUploadFileDescription
                                    className="block-center"
                                    onChange={(e:any) => setDesc(e.target.value)}
                                  />
                                </DocumentUploadDataSubSection>
                                {
                                    isFileLoaded === 1 /* && programmesList.filter((elem:any) => elem.name === searchedCourse).length > 0 */? (
                                      <DocumentUploadFileButton
                                        className="block-center"
                                        top={5}
                                        onClick={() => sendFile(
                                          materialName, 
                                          desc, 
                                          universitiesList, 
                                          facultiesList,
                                          programmesList, 
                                          searchedUniversity, 
                                          searchedFaculty,
                                          searchedProgramme, 
                                          searchedCourse, 
                                          file,
                                          currentToken, 
                                          setPhaseNumber, 
                                          setDocumentId, 
                                          toggleIsWorking,
                                        )}
                                      >
                                        Wyślij
                                      </DocumentUploadFileButton>
                                    ) : null
                                }
                              </>
                            ) : (
                              <>
                                <DocumentUploadNotWorking className="block-center">
                                  Dokument został opublikowany.
                                </DocumentUploadNotWorking>
                                {documentId !== undefined && documentId.length > 0 ? (
                                  <Link to={`/document/${documentId}`}>
                                    <DocumentUploadNotWorking className="block-center">
                                      Link do dokumentu
                                    </DocumentUploadNotWorking>
                                  </Link>
                                ) : null}
                              </>
                            ) : (
                              <DocumentUploadNotWorking className="block-center">
                                {!isOnline ? "Brak połączenia z siecią" : currentToken.length === 0 ? "Zaloguj się, żeby wrzucić materiał" : "Coś poszło nie tak. Spróbuj ponownie"}
                              </DocumentUploadNotWorking>
                            )
                        }
            </DocumentUploadFormDataSection>
            {isOnline ? (
              <DocumentUploadNextButton
                className="block-center"
                scale={materialName.length === 0 || phaseNumber !== 1 ? 0 : 1}
                onClick={() => setPhaseNumber(3)}
              >
                <SwipeRightAltIcon style={{ color: "inherit", fontSize: "inherit" }} />
              </DocumentUploadNextButton>
            ) : null}
          </DocumentUploadFormWrapper>
        </LandingSectionFilter>
      </LandingSectionWrapper>
    </MainContainer>
  );
};

export default DocumentUpload;
