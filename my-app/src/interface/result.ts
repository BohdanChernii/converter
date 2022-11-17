interface IResult<ICourencies> {
  success: boolean,
  timestamp: number,
  base: string,
  date: string,
  rates: ICourencies
}

export type {IResult}