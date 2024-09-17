
import React from 'react'
import Layout from '../components/Layout/Layout'
import {Link} from 'react-router-dom'
import meals from '../images/meals.jpeg'
import '../styles/HomeStyles.css'


const Home = () => {
  return (
      <Layout>
        <div className='home' style={{backgroundImage:`${meals}`}}>
          <div className="headerContainer">
            <h3>
              Restaurant-vmt -- site created by Sundararajan
            </h3>

            <p>
              All food items and content here are only for fictional purposes;
            </p>

            <br></br>

            <Link to='/menu'>
            <button> Go to MENU page... </button>
            </Link>

          </div>

        </div>
  
        </Layout>
  )
}

export default Home