import { UserContext } from "./App"
import Teacher from "./Teacher"

function HeadTeacher() {

    const fine = UserContext

    return(
        <>
      <div>HeadTeacher</div>
      <p>{fine}</p>
        <Teacher/>
      </>
    )
}
export default HeadTeacher