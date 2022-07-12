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
}

export default SearcherFiltersInterface;
