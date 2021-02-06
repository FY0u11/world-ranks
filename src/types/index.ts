export type SortByType = 'name' | 'population' | 'area' | 'gini'

export type SortType = {
  by: SortByType
  as: number
}

export type CountryType = {
  alpha3Code: string
  name: string
  population: number
  area?: number
  gini?: number
  flag: string
  region: string
  subregion: string
  borders: string[]
  capital: string
  nativeName: string
  languages: Array<{
    name: string
  }>
  currencies: Array<{
    symbol?: string
    name: string
  }>
}

export type StaticPropsType<
  T extends (...args: Array<any>) => void
> = ReturnType<T> extends Promise<{ props: infer U }> ? U : never
