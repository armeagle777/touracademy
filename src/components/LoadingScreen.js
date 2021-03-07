import React, { useEffect } from "react"
import NProgress from "nprogress"
import ReactLoading from "react-loading"

function LoadingScreen() {
  useEffect(() => {
    NProgress.start()

    return () => {
      NProgress.done()
    }
  }, [])

  return <></>
}

export default LoadingScreen
