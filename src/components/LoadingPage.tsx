import { BallTriangle } from 'react-loader-spinner'


const LoadingPage = () => {
  return (
    <>
    <div className="flex justify-center items-center w-full h-screen">
      <div className="text-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#aa336a"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <p>Loading...</p>
      </div>
    </div>
    </>
  )
}

export default LoadingPage