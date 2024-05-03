import { HeroCard, getHeroesByName } from '../'
import { useForm } from '../../hooks'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useMemo } from 'react'

export const SearchPage = () => {

  const navigate = useNavigate()

  const location = useLocation()

  const { q = '' } = queryString.parse( location.search )

  const heroes = getHeroesByName( q )

  // const heroes = useMemo(() => { getHeroesByName( q ) }, [ q ])
  
  const { searchText, onInputChange, onResetForm } = useForm({ searchText: q })

  const showSearchAlert = ( q.length === 0)

  const showErrorAlert = ( q.length > 0 ) && ( heroes.length === 0 )

  const onSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`?q=${ searchText }`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
              />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>

        </div>

        <div className="col-7">
          <h4>Results: { heroes.length }</h4>
          <hr />

          <div className={`alert alert-primary ${(showSearchAlert ? '' : 'd-none')}` }>
            Search a hero
          </div>

          <div className={`alert alert-danger  ${(showErrorAlert ? '' : 'd-none')}` }>
            No hero with <b>{ q }</b>
          </div>

          <div className='d-flex flex-column gap-2'>
          {
            heroes.map( hero => <HeroCard key={ hero.id } { ...hero }/> )
          }
          </div>


        </div>
      </div>
    </>
  )
}
