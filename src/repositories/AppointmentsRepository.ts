import Appointment from '../models/Appointment';
import { isEqual } from 'date-fns';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment>{

  // private appointments: Appointment[]; 

  // constructor(){
  //   this.appointments = [];
  // }

  // public all = (): Appointment[] => {
  //   return this.appointments;
  // }

  public findByDate = async (date: Date): Promise<Appointment | null> => {
    const findAppointment = await this.findOne({
      where: { date: date},
    })
    return findAppointment || null;
  }

  // public create = ( {barber, date}: CreateAppointmentDTO ): Appointment => {
  //   const appointment = new Appointment({barber, date});
  //   this.appointments.push(appointment);
  //   return appointment;
  // }
}

export default AppointmentsRepository;