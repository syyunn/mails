import React, { FunctionComponent, useEffect, useState } from 'react';

export default {
    title: 'Functions|HTML',
};


export const RenderIframe: FunctionComponent = () => {
    useEffect(() => {
        // var generatedSource = new XMLSerializer().serializeToString(document);
        // console.log("generated", generatedSource)

        const iframe = document.getElementById("test");

        if (iframe) {
            console.log("iframe !null", iframe)
            iframe.addEventListener("load", function () {
                console.log("iframe Loaded");
                if (document) {
                    const isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
                        input !== null && input.tagName === 'IFRAME';

                    const frame = document.getElementById('test');
                    console.log(frame)

                    // if (isIFrame(frame) && frame.contentWindow) {
                    //     const htmls = frame.contentWindow
                    //     console.log(htmls)
                    // }


                }
            });
        }
    });

    return (
        <iframe id="test" src="https://www.akingump.com/en/lawyers-advisors/index.html?action=attorneys&practices=213" width="1000" height="1000"></iframe>
    )
};
