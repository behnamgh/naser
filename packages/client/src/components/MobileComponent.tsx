import React, { useRef } from 'react';
import { FullPage, Slide } from 'react-full-page';
import MobileSection from './mobile-section';
import Menu from "./Mobile-Menu"
import MobileFrame from "./mobile-section/Frame"
import MobileLogo from "./mobile-section/Logo"

import '../sass/mobile.scss';

const MobileComonent = ({ pages, key }: any) => {

    const ImageRefs = {
        mainHeader: useRef<HTMLImageElement>(null)
    }


    const startChange = (data: { from: number, to: number }) => {
        if (ImageRefs.mainHeader.current) ImageRefs.mainHeader.current.style.display = "none"
    }

    const endChange = (data: { from: number, to: number }) => {
        if (ImageRefs.mainHeader.current) ImageRefs.mainHeader.current.style.display = "unset"
    }

    return (<div className="mobile">
        <MobileFrame />
        <MobileLogo />
        <div className="mobile-content">
            {pages && pages.length &&
                <FullPage key={key} controls={(props: any) => <Menu key="menu" {...props} forwardRef={ImageRefs.mainHeader} pages={pages} />} afterChange={endChange} beforeChange={startChange}>
                    {pages.map((page: any, index: number) => <Slide key={page.id}>
                        <MobileSection page={page} />
                    </Slide>)}
                </FullPage>
            }
        </div>
    </div>
    );
};

export default MobileComonent;