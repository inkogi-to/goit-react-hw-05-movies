import { Route, Routes} from "react-router-dom";
import Home from '../page/Home'
import Movies from '../page/Movies'
import Cast from "./Cast";
import Reviews from "./Reviews";
import MoviesDetails from "../page/MoviesDetails";
import {Layout} from "./Layout";


export const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Layout/>}> \
        <Route index element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:movieId' element={<MoviesDetails/>}>
          <Route path='cast' element={<Cast/>}/>
          <Route path='reviews' element={<Reviews/>}/>
        </Route>
      </Route>

    </Routes>
  )
};

