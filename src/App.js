import CardItem from './components/CardItem/index'
import './App.css'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => (
  <div className="technologies-list-container">
    <div className="technology-type">
      <h1 className="head">Learn 4.0 Technologies</h1>
    </div>
    <div className="description">
      <p className="paragraph">
        Get trained by alumini of IITs and top compaines like Amazon,
        Microsoft,Intel,Nividia,Qualcomm,etc.Learn directly from professionals
        involved in product development
      </p>
    </div>
    <ul>
      <div className="make-flex">
        {cardsList.map(eachItem => (
          <CardItem cardsList={eachItem} key={eachItem.id} />
        ))}
      </div>
    </ul>
  </div>
)

export default App
