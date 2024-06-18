import './Bg.css'
import video1 from '../../assets/video1.mp4'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'


const Bg = ({playStatus, heroCount}) => {
  if (playStatus) {
    return (
        <video className='bg' autoPlay loop muted>
            <source src={video1} type='video/mp4' />
        </video>
    )
  } else if(heroCount===0){
    return <img src={img1} className='bg fade-in' alt="img1"/>
  } else if(heroCount===1){
    return <img src={img2} className='bg fade-in' alt="img2"/>
  } else if(heroCount===2){
    return <img src={img3} className='bg fade-in' alt="img3"/>
  }
}

export default Bg