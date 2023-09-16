import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Item from './Item';
import Wrapper from './Wrapper.jsx';
import Loader from './UI/Loader';
import CustomButton from './UI/CustomButton';

const MainWrapper = styled(Wrapper)`
    display: grid;
    grid-template-columns: 1fr .25fr;
`

const Content = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setIsLoading(true)
        const getData = async () => {
            new Promise((resolve, reject) => {
                axios.get(`http://localhost:7000/api/tariffs`).then(res => {
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
            {isLoading && <Loader />}
            {!isLoading && 
                <>
                    <MainWrapper>
                        <Wrapper>
                            {data?.map(item => (
                                <Item key={item.id} item={item} />
                            ))}
                        </Wrapper>
                        <div>
                            <CustomButton text={"Обновить"}/>
                        </div>
                    </MainWrapper>
                </>
            }
            {!data.length && <h1>Упс... чет хуйня какая-то...</h1>}
        </>
    );
};
const MemoContent = React.memo(Content);
export default MemoContent;