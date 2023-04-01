export type RaceDataType = {
  id: string
  race_name: string
  race_place: string
  number_of_entries: number
  race_state: string
  date: string
  race_sesults: []
}

export type CrawlResultsType = {
  information: number
  details: number
  acquisitionDate: string
}

export type SearchCriteriaType = {
  racetype: string
  racetrack: string
  distance: string
}
