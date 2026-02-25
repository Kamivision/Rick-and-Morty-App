const NotFoundPage = () => {
    return (
        <>
            <button onClick={() => window.location.href = 'http://127.0.0.1:5173/'}>Go Home</button>
            <img src="./404Error.jpg" alt="404 Error Page" />
        </>
    )
}
export default NotFoundPage;