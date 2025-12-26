

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-100">
       <div className="flex items-center justify-center" >
            <img src="https://www.emojiall.com/images/240/telegram/1f937.gif" alt="" />
            <div className="text-center">
                <h1 className="text-5xl font-bold">OOPS!!</h1>
                <h3 className="text-2xl text-red-600 font-semibold">404 - Page Not Found...</h3>
                <p>The page you are looking for doesn't exist or other error occured.</p>
                <button className="text-white bg-black rounded-2xl py-3 px-2 my-3">Back to Home</button>
            </div>
       </div>
    </div>
  )
}

export default NotFound