import React, { useState} from 'react'
import ListForm from '../ListForm/ListForm'
import ListList from '../ListsList/ListList'
import './Home.css'


export default function Home() {
    const [showForm, setShowForm] = useState(false)
    const changeShowForm = () =>{
        setShowForm(!showForm)
    }
    return (
        <main>
            <header className='title'>
                <h1>Welcome to your organizer</h1>
            </header>
            <ListForm showForm={showForm} changeShowForm={changeShowForm}/>
            <hr></hr>
            <ListList />
        </main>
    )
}
