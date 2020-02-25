import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Sample from './components/sample-template';

import './sass/main.scss';

const App3 = () => {
    return (<div className="App">
        <FullPage beforeChange={console.log} afterChange={console.log}>
            <Slide>
                <Sample title="Header" />
            </Slide>
            <Slide>
                <Sample title="Videos" />
            </Slide>
            <Slide>
                <Sample title="GamePlay" />
            </Slide>
            <Slide>
                <Sample title="News" />
            </Slide>
            <Slide>
                <Sample title="Gallery" />
            </Slide>
            <Slide>
                <Sample title="Footer" />
            </Slide>
        </FullPage>
    </div>
    );
};

export default App3;