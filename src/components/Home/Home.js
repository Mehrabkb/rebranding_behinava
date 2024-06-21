import './Home.css';
import Menu from '../Menu/Menu';
import Content from '../Content/Content';
import menuIcon from '../../images/menu.png';
function Home() {
  return (
    <>
    <div className='mobile-header'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2'>
            <button className='btn-menu'>
              <img src={menuIcon} /> 
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className='container my-5 home-container'>
        <Content />
    </div>
    </>
  );
}

export default Home;
