import { Length, validate, ValidationError, IsString, IsNumber } from 'class-validator';

export class BookingDto {
  @IsNumber()
    capacidad: number;

  @Length(5, 7)
  @IsString()
    precio: string;

  @Length(4, 10)
  @IsString()
    estado: string;

  async vatidation (bookingDto: BookingDto): Promise<ValidationError[]> {
    const booking = new BookingDto();
    booking.capacidad = bookingDto.capacidad;
    booking.precio = bookingDto.precio;
    booking.estado = bookingDto.estado;
    return await validate(booking).then(errors => {
      const err = [];
      if (errors.length > 0) {
        errors.map(item => {
          return err.push({ property: item.property, ...item.constraints });
        });
      }
      return err;
    });
  }
}