import { Length, validate, ValidationError, IsString, IsArray } from 'class-validator';

export class BookingDto {
  @IsArray()
    codigo: number[];

  @Length(4, 10)
  @IsString()
    nombre: string;

  @Length(6, 12)
  @IsString()
    fechaIngreso: string;

  @Length(6, 12)
  @IsString()
    fechaSalida: string;

  async vatidation? (bookingDto: BookingDto): Promise<ValidationError[]> {
    const booking = new BookingDto();
    booking.codigo = bookingDto.codigo;
    booking.nombre = bookingDto.nombre;
    booking.fechaIngreso = bookingDto.fechaIngreso;
    booking.fechaSalida = bookingDto.fechaSalida;
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
