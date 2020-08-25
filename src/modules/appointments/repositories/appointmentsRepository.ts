import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/appointment';

@EntityRepository(Appointment) // o parametro passado nessa linha é o model Appointment
class AppointmentRepository extends Repository<Appointment> {
  // o parametro passado na linha acima é o model Appointment novamente

  public async findByDate(date: Date): Promise<Appointment | null> {
    // a função teve de ser alterada para assíncrona pq o método findOne retorna uma Promise
    const findAppointment = await this.findOne({
      where: date,
    });

    return findAppointment || null;
  }
}

export default AppointmentRepository;
