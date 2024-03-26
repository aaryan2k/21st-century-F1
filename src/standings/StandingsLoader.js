import axios from 'axios';

const StandingsLoader= async({params}) => {
    const { year } = params;
    console.log("Executing Standings Loader Year is " + year);
    
    
    let ergastDriverUrl = `http://ergast.com/api/f1/${year}/driverStandings.json`;
    let ergastConstructorUrl = `http://ergast.com/api/f1/${year}/constructorStandings.json`;
    

    console.log("Promise all call")
    const standings = await Promise.all([
      axios.get(ergastDriverUrl).then(response => response.data),
      axios.get(ergastConstructorUrl).then(response => response.data)

    ]);
    console.log("Promise all call completed");
    // console.log(standings[0]);

    return standings;    
  }


  
  export default StandingsLoader;