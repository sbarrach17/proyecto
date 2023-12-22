// import BGImgae from '../components/home5.jpg'
import "../styles/home.css"
export function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Home = () => {

  return (
    <div className='home' style={{ backgroundImage: `url('./img/home5.jpg')` }}>
      <div className='tittle'>
        <h1>
          "Toda la información que pueda ser <br />recopilada en beneficio de las <br /> generaciones futuras debe recogerse <br />ahora o la oportunidad se perderá <br /> para siempre"
        </h1>
      </div>
    </div>
  );
};

export default Home;