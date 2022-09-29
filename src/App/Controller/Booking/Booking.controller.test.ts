import { BookingDto } from './dto/index';
import { BookingController } from './Booking.controller';
import { ValidationError } from 'class-validator';

describe("Validaciones del controlador", () => {
  test("Valadación de datos de reserva exitosa", async () => {
    const bookingController = new BookingController();
    const booking = {
      capacidad: 2,
      precio: "10000",
      estado: "reservado",
      vatidation: function (bookingDto: BookingDto): Promise<ValidationError[]> {
        throw new Error('Function not implemented.');
      }
    }
    const {status, data} = await bookingController.create(booking);
    expect(status).toBe(200);
    expect("reservado").toBe(data["estado"]);
    expect("10000").toBe(data["precio"]);
  });

  test("Validación de datos de reserva incorrecta cantidad de caracteres incorrectos en el precio y el estado", async () => {
    const bookingController = new BookingController();
    const booking = {
      capacidad: 2,
      precio: "1000",
      estado: "res",
      vatidation: function (bookingDto: BookingDto): Promise<ValidationError[]> {
        throw new Error('Function not implemented.');
      }
    }
    const {status, data} = await bookingController.create(booking);
    expect(status).toBe(400);
    expect("precio").toBe(data[0]["property"]);
    expect("precio must be longer than or equal to 5 characters").toBe(data[0]["isLength"]);
    expect("estado").toBe(data[1]["property"]);
    expect("estado must be longer than or equal to 4 characters").toBe(data[1]["isLength"]);
  });
})