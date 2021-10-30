import React from 'react';
import { withRouter } from 'react-router-dom';

import { BackgroundImage, ContentContainer, MenuItemContainer, SubtitleContainer, TitleContainer } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImage className='background-image' imageUrl={imageUrl}/>
        <ContentContainer className='content'>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <SubtitleContainer>SHOP NOW</SubtitleContainer>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem);