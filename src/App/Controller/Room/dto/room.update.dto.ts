import { Length, validate, ValidationError, IsString, IsInt, IsNumber } from 'class-validator';

export class RoomDto {
  @IsInt()
    codigo: number;

  @Length(4, 10)
  @IsString()
    estado: string;

  async vatidation (roomDto: RoomDto): Promise<ValidationError[]> {
    const room = new RoomDto();
    room.codigo = roomDto.codigo;
    room.estado = roomDto.estado;
    return await validate(room).then(errors => {
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