interface IUserInfo {
  id: number;
  email: string;
  password: string;
  token: string;
}

interface IBrief {
  confirmed: number;
  deaths: number;
  recovered: number;
}

interface ICountry {
  countryregion: string;
  lastupdate: string;
  location: {
    lat: number;
    lng: number;
  }
  countrycode: {
    iso2: string;
    iso3: string;
  }
  confirmed: number;
  deaths: number;
  recovered: number;
}


export type { IUserInfo, IBrief, ICountry };