import React from "react";

import {
    LoaderContainer,
    LoadingBar
} from '../styled-components/LoaderStyles'

function Loader () {
    return (
      <LoaderContainer>
        <LoadingBar />
        <LoadingBar />
        <LoadingBar />
        <LoadingBar />
      </LoaderContainer>
    );
}

export default Loader;