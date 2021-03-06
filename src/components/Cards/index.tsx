import { useCountryContext } from "@/lib/CountryContext";
import Card from "./Card";
import classes from './index.module.css';

const Cards = () => {
  const state = useCountryContext();

  return (
    <div className={classes.countries}>
      {
        state.filtered ? (
          state.filtered.map((item) => <Card capital={item.capital && item.capital[0]} country={item.name.common} flag={item.flags.png} population={item.population} region={item.region} key={item.name.common} code={item.cioc} />)
        ) : null
      }
    </div>
  )
}

export default Cards;