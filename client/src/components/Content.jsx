import React from 'react';

import Item from './Item';
import Wrapper from './Wrapper.jsx';
import Loader from './UI/Loader';
import { StyledText700 } from './UI/CustomText';

const Content = ({ isloading, data }) => {
    return (
        <>
            <Wrapper isloading={isloading}>
                {isloading && <Loader />}
                {!isloading &&
                    data?.map(item => (
                        <Item key={item.id} item={item} />
                    ))
                }
                {!data.length && <StyledText700>Кажется тут пусто...</StyledText700>}
            </Wrapper>
        </>
    );
};
const MemoContent = React.memo(Content);
export default MemoContent;