const isOnline = true
const temp = 20
function temperature() {
    if (temp > 25) {
       return <p>Hot</p>
    }if (temp >= 20 && temp >= 14) {
       return <p>Comfort</p>
    }
    if(temp < 15){
       return <p>Cold</p>
    }
}

function Online() {

    return(<>
        {isOnline && <h3>🟢 Қолданушы онлайн</h3> || <h3>🔴 Қолданушы офлайн</h3>}
        {temperature()}
        </>
    )
}
export default Online