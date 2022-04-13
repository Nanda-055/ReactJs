import React, { useState, useEffect } from 'react';
import axios from 'axios';
// components
// import MyButton from '../../components/button';
import MyTable from '../../components/table';

const Home = () => {
  const [counter, setCounter] = useState(0)

  const [buttonName, setButtonName] = useState('button dari state')

  const [data, setData] = useState([
    {
      id: 1,
      car: 'BMW',
      type: 'Sport',
      year: 1997
    },
    {
      id: 2,
      car: 'Mercy',
      type: 'E',
      year: 1997
    },
  ])

  const [columns, setColumns] = useState([
    'Id',
    'Car',
    'Type',
    'Year',
    'Aksi'
  ])

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
    console.log(id)
  }

  // const handleCounter = (num) => {
  //   setCounter(counter + num)
  // }

  const [MusicData, setMusicData] = useState([])
  const getMusicData = async() => {
    const response = await fetch(`https://www.boredapi.com/api/activity`)
    const responseJson = await response.json()

    setMusicData(responseJson)

    console.log(responseJson, 'data music')
  }

  const [DogData, setDogData] = useState([])
  const getDogData = async() => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
    const responseJson = await response.json()

    setDogData(responseJson)

    console.log(responseJson, 'data anjing')
  }

  useEffect(() => {
    getMusicData()
    getDogData()
  }, [])


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = {
      email,
      password
    }

    if(password === ''){
      alert('password tidak boleh kosong')
    } else if(email === ''){
      alert('email tidak boleh kosong')
    } else {
      console.log(payload, 'data submit')
    }

  }

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 mt-5">
          <div class="card mb-3">
            <img class="card-img-top" src="https://www.apple.com/v/apple-music/t/images/shared/og__ckjrh2mu8b2a_image.png" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{MusicData.activity}</h5>
              <p class="card-text">This card design for music activity where key {MusicData.key} and the participants total {MusicData.participants} and price {MusicData.price}</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>

          <div class="card mb-3">
            <img class="card-img-top" src={DogData?.message} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{DogData?.status}</h5>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>

          </div>
        </div>
      </div>


    </>
  );
}

export default Home;