const NotFound = () => {
    return ( <>
        <h1 className="bg-warning p-3 display-2 text-center rounded">Page 404 <small>page introuvable</small></h1>
        {/** 
         * https://unsplash.com
         * google photopea.com
         * si image dans le dossier public
         */}
         <div className="text-center mt-3 ">
            <img src="lost.jpg" alt="" className="rounded"/>
         </div>
    </> );
}
 
export default NotFound;