import classes from './index.module.css'

interface ICard {
  flag: string;
  country: string;
  population: number;
  region: string;
  capital: string;
}
const Card = ({ flag, country, population, region, capital }: ICard) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__logo}>
        <img src={flag} alt={`The flag of ${country}`}></img>
      </div>
      <div className={classes.card__details}>
        <h2>{country}</h2>
        <dl>
          <div>
            <dt>Population</dt>
            <dd>{population}</dd>
          </div>
          <div>
            <dt>Region</dt>
            <dd>{region}</dd>
          </div>
          <div>
            <dt>Capital</dt>
            <dd>{capital}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Card;