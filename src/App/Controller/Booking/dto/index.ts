import { Length, IsEmail, validate, ValidationError, IsString } from 'class-validator';

export class BookingDto {
  @Length(3, 15)
  @IsString()
    name: string;

  @Length(7, 50)
  @IsEmail()
    email: string;

  async vatidation (bookingDto: BookingDto): Promise<ValidationError[]> {
    const user = new BookingDto();
    user.name = bookingDto.name;
    user.email = bookingDto.email;
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