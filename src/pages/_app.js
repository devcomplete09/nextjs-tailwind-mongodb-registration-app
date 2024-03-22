import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Build Auth - Sign up & Login app | Next.js, MongoDB, Tailwind
export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <ToastContainer />
  </>;
}
