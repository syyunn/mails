import React, { FunctionComponent, useEffect, useState } from 'react';

export default {
    title: 'Functions|HTML',
};

export const GetHTML: FunctionComponent = () => {
    useEffect(() => {
        var generatedSource = new XMLSerializer().serializeToString(document);
        console.log("generated", generatedSource)
    });

    var text = 'WT/DS161/R\n                                                                                             WT/DS169/R\n                                                                                                    Page 3\nII.      FACTUAL ASPECTS\n1. Product coverage of the dispute\n8.       The case before the Panel concerned measures maintained by Korea on imports of beef of the\nfollowing tariff description4: 02.01-10: meat of bovine animals (fresh or chilled/carcasses and half-\ncarcasses); 02.01-20: meat of bovine animals (fresh or chilled/cuts with bone in); 02.01-30: meat of\nbovine animals (fresh or chilled/boneless); 02.02-10: meat of bovine animals (frozen/carcasses and\nhalf-carcasses): 02.02-20: meat of bovine animals (frozen/cuts with bone in); 02.02-30: meat of\nbovine animals (frozen/boneless);\n2. Korea\'s Schedule of Concessions\n9.       Korea\'s Schedule of tariff concessions (LX) provides for the entry of fresh, chilled and frozen\nbeef with market access opportunities rising from 123,000 tonnes in 1995 to 225.000 tonnes in 2000.\n'
    return (
        <article className="cf mh4 bb b--silver">
            <header className="fn fl-ns w-50-ns pr4-ns">
                <h1 className="f1 lh-title fw9 mb3 mt0 pt3 tc">
                    Korea - Various Measures on Beef
                </h1>
                <p className="f4 lh-copy pv3 mt0-ns fw5 mid-gray ph1-ns" style={{ whiteSpace: "pre-wrap" }}>
                    {text.replace(/(?:\r\n|\r|\n)/g, ' ')}
                </p>
            </header>
        </article>
    )
};

