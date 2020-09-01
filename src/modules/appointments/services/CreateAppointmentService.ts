import { startOfHour } from 'date-fns';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import appointment from '../infra/typeorm/entities/appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  date: Date;
}

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({ date, provider_id }: IRequest): Promise<appointment> {
    // Appointment (acima) será o tipo de retorno da promise

    const appointmentDate = startOfHour(date);
    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      // não se tem acesso ao request, response diretamente no service
      // return response.status(400).json({message: "This appointment is already booked."});
      throw new AppError('This appointment is already booked.');
    }

    // o comando abaixo apenas cria a instância do objeto, mas não o salva no banco de dados
    const appointmentCreation = await this.appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointmentCreation;
  }
}

export default CreateAppointmentService;
