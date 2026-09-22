import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDevice } from "../../context/device-context";

import { dummyDevices, DUMMY_DEVICE_ID } from "../../db/dummyData";

const RoomDetailsCard = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const { rooms, deviceClaimed, isDummyUser } = useDevice();

  // find room using url id

  const room = useMemo(() => {
    if (!roomId || !rooms.length) {
      return null;
    }

    return rooms.find((item) => item.id === String(roomId));
  }, [roomId, rooms]);

  const device = useMemo(() => {
    if (!room?.deviceId) {
      return null;
    }

    return dummyDevices.find((item) => item.id === room.deviceId);
  }, [room]);

  console.log(device);

  return <div>RoomDetailsCard</div>;
};

export default RoomDetailsCard;
