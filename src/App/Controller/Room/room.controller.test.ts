import { ValidationError } from 'class-validator';
import { RoomDto } from './dto/room.dto';
import { RoomController } from './room.controller';

describe("Validaciones del controlador", () => {
  test("Valadación de datos de reserva exitosa", async () => {
    const roomController = new RoomController();
    const room = {
      codigo: 1001,
      capacidad: 2,
      precio: "10000",
      estado: "reservado",
      vatidation: function (roomDto: RoomDto): Promise<ValidationError[]> {
        throw new Error('Function not implemented.');
      }
    }
    const {status, data} = await roomController.create(room);
    
    expect(status).toBe(200);
    expect("reservado").toBe(data["estado"]);
    expect("10000").toBe(data["precio"]);
  });

  test("Validación de datos de reserva incorrecta cantidad de caracteres incorrectos en el precio y el estado", async () => {
    const roomController = new RoomController();
    const room = {
      codigo: 1001,
      capacidad: 2,
      precio: "1000",
      estado: "res",
      vatidation: function (roomDto: RoomDto): Promise<ValidationError[]> {
        throw new Error('Function not implemented.');
      }
    }
    const {status, data} = await roomController.create(room);
    expect(status).toBe(400);
    expect("precio").toBe(data[0]["property"]);
    expect("precio must be longer than or equal to 5 characters").toBe(data[0]["isLength"]);
    expect("estado").toBe(data[1]["property"]);
    expect("estado must be longer than or equal to 4 characters").toBe(data[1]["isLength"]);
  });

  test("Validación de datos de reserva incorrecta tipos de datos incorrectos en la capacidad y el estado", async () => {
    const roomController = new RoomController();
    const room = {
      codigo: 1002,
      capacidad: 2,
      precio: "1000",
      estado: "res",
      vatidation: function (roomDto: RoomDto): Promise<ValidationError[]> {
        throw new Error('Function not implemented.');
      }
    }
    const {status, data} = await roomController.create(room);
    expect(status).toBe(400);
    expect("precio").toBe(data[0]["property"]);
    expect("precio must be longer than or equal to 5 characters").toBe(data[0]["isLength"]);
    expect("estado").toBe(data[1]["property"]);
    expect("estado must be longer than or equal to 4 characters").toBe(data[1]["isLength"]);
  });
})