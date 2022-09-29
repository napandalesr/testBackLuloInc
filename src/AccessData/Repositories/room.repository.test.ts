import { BookingRepository } from "./booking.repository";
import { RoomModel } from "./Model/room.model";
import { RoomRepository } from "./room.repository";

describe("Pruebas repositorio para gestionar habitaciones", () => {
  test("Debe guardar una habitación", async () => {
    const roomRepository = new RoomRepository();
    const roomModel: RoomModel = {
      capacidad: 2,
      codigo: 1000,
      estado: "disponible",
      precio: "50.000"
    }
    const codigo = await roomRepository.create(roomModel);
    expect(codigo).toBe(1000);
  });
})