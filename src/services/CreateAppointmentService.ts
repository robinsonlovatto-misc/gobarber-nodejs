import { getCustomRepository } from 'typeorm';

import { startOfHour } from 'date-fns';
import appointment from '../models/appointment';
import AppointmentsRepository from '../repositories/appointmentsRepository';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<appointment> {
    // Appointment (acima) será o tipo de retorno da promise
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);
    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      // não se tem acesso ao rquest, response dietamente no service
      // return response.status(400).json({message: "This appointment is already booked."});
      throw Error('This appointment is already booked.');
    }

    // o comando abaixo apenas cria a instância do objeto, mas não o salva no banco de dados
    const appointmentCreation = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    // a função abaixo salva o registro no banco de dados e como é assíncrona, faz com que a função toda seja alterada para assíncrona
    await appointmentsRepository.save(appointmentCreation);

    return appointmentCreation;
  }
}

export default CreateAppointmentService;
