const isAdmin = true
const isGuest = false 

function Sers() {
    return(
        <div>
            {isAdmin && <h1>Сіз әкімшісіз</h1>}
            {isGuest && <h1>Қарапайым қолданушы</h1>}
        </div>

    )

    
};

export default Sers;