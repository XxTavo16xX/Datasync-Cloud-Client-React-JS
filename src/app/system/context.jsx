// * Dependencies Required

import React from 'react';

// * Default Context

const AppContext = React.createContext();

const defaultContext = {
    system: {
        app_name: 'Datasync',
        app_view_mode: 'Windows'
    }
}

const compareAndMergeContexts = (defaultContext, localContext) => {

    // * If localContext is null, return defaultContext

    if (!localContext) {
        return defaultContext;
    }

    // * Iiterate over the keys in defaultContext

    Object.keys(defaultContext).forEach(key => {

        // * If localContext doesn't have the same key, add it

        if (!localContext.hasOwnProperty(key)) {

            localContext[key] = defaultContext[key];
        } else {

            //  * If both values are objects, recursively compare and merge them

            if (typeof defaultContext[key] === 'object' && typeof localContext[key] === 'object') {

                localContext[key] = compareAndMergeContexts(defaultContext[key], localContext[key]);

            }

        }

    });

    return localContext;

};

const localContext = JSON.parse(localStorage.getItem('localContext'))

const contextToSet = compareAndMergeContexts(defaultContext, localContext)

localStorage.setItem('localContext', JSON.stringify(contextToSet));

const AppProvider = (props) => {

    const [context, updateReactContext] = React.useState(contextToSet);

    const setContext = (newContext) => {

        localStorage.setItem('localContext', JSON.stringify(newContext))
        updateReactContext(newContext)
    }

    const setDefaultContext = () => {

        setContext(defaultContext)
        localStorage.setItem('localContext', JSON.stringify(defaultContext));

    }

    return (

        <AppContext.Provider value={{ context, setContext, setDefaultContext }}>

            {props.children}

        </AppContext.Provider>

    )

}

export { AppContext, AppProvider }