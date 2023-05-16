import React from "react"
import AllBusinesses from "../Components/GetAll/AllBusinesses"
import AllVolunteer from "../Components/GetAll/AllVolunteer"
import AllInnovator from "../Components/GetAll/AllInnovators"
import HomeBanner from "../Components/HomeBanner"


export default function HomePage() {
  return (
    <div>
      <HomeBanner />
      <AllBusinesses />
      <AllVolunteer />
      <AllInnovator />
    </div>
  )
}
