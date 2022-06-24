import {Component} from 'react'
import EventItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

const registrationStatusConstants = {
  intial: 'INTIAL',
  yetToRegistered: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class Events extends Component {
  state = {
    isActiveId: '',
    currentRegistrationStatus: registrationStatusConstants.intial,
  }

  onClickEventItemImg = (id, registrationStatus) => {
    this.setState({
      isActiveId: id,
      currentRegistrationStatus: registrationStatus,
    })
  }

  renderOutput = () => {
    const {currentRegistrationStatus} = this.state
    switch (currentRegistrationStatus) {
      case 'INTIAL':
        return (
          <p className="para">
            Click on an event, to view its registration details
          </p>
        )
      case 'YET_TO_REGISTER':
        return (
          <div className="yetContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              alt="yet to register"
              className="img"
            />
            <p className="para">
              A live performance brings so much to your relationship with dance.
              Seeing dance live can often make you feel totally in love with
              this beautifil art form
            </p>
            <button type="button" className="button">
              Register Here
            </button>
          </div>
        )
      case 'REGISTERED':
        return (
          <div className="yetContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
              alt="registered"
            />
            <h1 className="para">You have already registered for the event</h1>
          </div>
        )
      case 'REGISTRATIONS_CLOSED':
        return (
          <div className="yetContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
              alt="registrations closed"
              className="img"
            />
            <h1 className="head">Registrations are closed now!</h1>
            <p className="para">Stay tuned. We will reopen</p>
          </div>
        )

      default:
        return null
    }
  }

  render() {
    const {isActiveId, currentRegistrationStatus} = this.state
    console.log(currentRegistrationStatus)
    return (
      <div className="mainContainer">
        <div className="container">
          <h1 className="head">Events</h1>
          <ul className="listContainer">
            {eventsList.map(eachEvent => (
              <EventItem
                eventsList={eachEvent}
                key={eachEvent.id}
                onClickEventItemImg={this.onClickEventItemImg}
                isActiveTab={isActiveId === eachEvent.id}
              />
            ))}
          </ul>
        </div>
        <div className="secondContainer">{this.renderOutput()}</div>
      </div>
    )
  }
}
export default Events
