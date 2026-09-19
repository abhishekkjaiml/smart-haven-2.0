import { useDevice } from "../../context/device-context"

const AllRooms = () => {

    const {rooms} = useDevice()

    console.log(rooms)
  return (
    <div>AllRooms</div>
  )
}

export default AllRooms