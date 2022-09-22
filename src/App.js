import './App.css';
import { PRICE_DATA } from './PRICE_DATA'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">
      <PriceLIst />
    </div>
  );
}

export default App;
const PriceLIst = () => {
  const priceInfo = PRICE_DATA;
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {priceInfo.map((priceItem, ind) => (
            <PriceCart priceItem={priceItem} key={ind} />
          ))}
        </div>
      </div>
    </section>
  )
}

const PriceCart = ({ priceItem }) => {
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">{priceItem.subscription}</h5>
          <h6 class="card-price text-center">{priceItem.amount}<span class="period">/month</span></h6>
          <ul class="fa-ul">
            <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{priceItem.user}</li>
            <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{priceItem.storage}</li>
            <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{priceItem.Projects}</li>
            <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{priceItem.Access}</li>
            <li class="text-muted"><span class="fa-li">{priceItem.Private_projects === true ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</span>Unlimited
              Private Projects</li>
            <li class="text-muted"><span class="fa-li">{priceItem.Dedicated_Phone_Support === true ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</span>Dedicated
              Phone Support</li>
            <li class="text-muted"><span class="fa-li">{priceItem.Subdomain === true ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</span>Free Subdomain
            </li>
            <li class="text-muted"><span class="fa-li">{priceItem.Status_Reports === true ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</span>Monthly Status
              Reports</li>
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  )
}
function Name() {
  return (
    <div>
      <p>hi shiv</p>
    </div>
  )
}
