import Student from "./Student";
import { UserContext } from "./App";

function Teacher() {
        const fine = UserContext
    return(
        <>
        
        <div>Teacher</div>
        <p>{fine}</p>
          <Student/>
        </>
    )    
}
export default Teacher;