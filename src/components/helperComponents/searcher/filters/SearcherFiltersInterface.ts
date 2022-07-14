interface SearcherFiltersInterface {
  openedFilters: boolean[],
  setOpenedFilters: (newState: boolean[]) => void,
  chosenSemester: number,
  setChosenSemester: (newState: number) => void,
  chosenProgramme: string,
  setChosenProgramme: (newState: string) => void,
  programmesList: any[],
  chosenCourse: string,
  setChosenCourse: (newState: string) => void,
  coursesList: any[],
  chosenDegree: string,
  setChosenDegree: (newState: string) => void,
  chosenType: string,
  setChosenType: (newState: string) => void,
}

export default SearcherFiltersInterface;
