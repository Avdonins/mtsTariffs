import AppWrapper from './components/AppWrapper.jsx';
import MemoContent from './components/Content.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import useResize from './helpers/useResize.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const width = useResize();

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  const updateList = async () => {
    //https://myServer-btyb.onrender.com
    setIsLoading(true)
    await axios.post(`./api/tariffs`).then(async () => {
      await axios.get(`./api/tariffs`).then(res => {
        setData(res.data.tariffs)
      }).then(() => {
        setIsLoading(false)
      })
    })
  }

  useEffect(() => {
    setIsLoading(true)
    const getData = async () => {
      new Promise((resolve, reject) => {
        axios.get(`./api/tariffs`).then(res => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      }).then(data => setData(data.tariffs))
        .catch((err) => {
          console.log(err);
        }).finally(() => {
          setIsLoading(false)
        })
    }
    getData()
  }, [])

  return (
    <>
      <AppWrapper width={width}>
        <Header updateList={updateList} />
        <MemoContent isloading={isLoading} data={data} />
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;