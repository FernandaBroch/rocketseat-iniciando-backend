import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import Appointment from '../models/Appointment';



interface Request{
  date: Date,
  barber_id: string
}

class CreateAppointmentServide {

  public execute = async ({ date, barber_id }: Request): Promise<Appointment> => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  
    const hourChangedToStart = startOfHour(date);

    const findAppointmentsInSameDate = await appointmentsRepository.findByDate(hourChangedToStart);

    if(findAppointmentsInSameDate){
      throw Error( 'This appointment is already booked' );
    }

    const appointment = appointmentsRepository.create({
      barber_id,
      date: hourChangedToStart,
    })

    await appointmentsRepository.save(appointment)

    return appointment;
  }

}

export default CreateAppointmentServide;