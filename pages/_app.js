import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'photoswipe/dist/photoswipe.css'
import '../styles/sass/style.scss'
import Head from "next/head";

export const metadata = {
  openGraph: {
    title: 'Ivaan Shynon Lepcha',
    description: 'Birthday Invitation',
    images: ['/public/images/slider/_Z060213.jpg']
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Ivaan Shynon Lepcha</title>
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </div>

  )
}

export default MyApp
