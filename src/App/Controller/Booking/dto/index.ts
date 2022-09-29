import { Length, IsEmail, validate, ValidationError, IsString, IsNumber } from 'class-validator';

export class BookingDto {
  @Length(1, 2)
  @IsNumber()
    capacidad: string;

  @Length(5, 7)
  @IsString()
    precio: string;

  @Length(5, 7)
  @IsString()
    estado: string;

  async vatidation (bookingDto: BookingDto): Promise<ValidationError[]> {
    const user = new BookingDto();
    user.capacidad = bookingDto.capacidad;
    user.precio = bookingDto.precio;
    user.estado = user.estado;
    return await validate(user).then(errors => {
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