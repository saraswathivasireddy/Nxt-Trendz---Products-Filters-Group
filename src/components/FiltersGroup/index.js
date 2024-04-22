import './index.css'
import {BsSearch} from 'react-icons/bs'
import {withRouter} from 'react-router-dom'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList, onClickingCategory,onChangingInput} = props

  const clickingCategory = () => {
    console.log(props)
  }

  const changeInput= (event) =>onChangingInput(event.target.value)

  return (
    <div className="filters-group-container">
      <div className="input-container">
        <input type="search" placeholder="Search" className="input-search" onChange={changeInput} />
        <BsSearch />
      </div>

      <h1>Category</h1>
      <ul>
        {categoryOptions.map(eachCategory => (
          <li
            className="category-list"
            onClick={clickingCategory}
            key={eachCategory.categoryId}
          >
            {eachCategory.name}
          </li>
        ))}
      </ul>

      <h1>Rating</h1>
      <ul>
        {ratingsList.map(eachRating => (
          <li className="rating-list-container" key={eachRating.ratingId}>
            <img src={eachRating.imageUrl} className="rating-image" />
            <p className="rating-list">& up</p>
          </li>
        ))}
      </ul>

      <button className="clear-filters-button">Clear Filters</button>
    </div>
  )
}

export default withRouter(FiltersGroup)
