import React from 'react'
import './App.css'
import StudentProfileCard from './components/StudentProfile'
import { userProfileProps } from './components/mocks/studentProfileMock'

const { name, profilePictureUrl, email, phoneNumber, major, gpa } = userProfileProps

const App = (): JSX.Element => {
  return (
    <div className="App">
    <StudentProfileCard
    name={name} profilePictureUrl={profilePictureUrl} email={email} phoneNumber={phoneNumber} major={major} gpa={gpa}
    />
    </div>
  )
}

export default App
