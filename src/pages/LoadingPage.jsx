import React from 'react'

const LoadingPage = () => {
    return (
        <>
            <div className="wrapperLoading">

                <img
                    className="animate-spin"
                    src="/images\webscapeLOGO.png"
                    alt={`logo`}
                />
            </div>
        </>
    )
}

export default LoadingPage