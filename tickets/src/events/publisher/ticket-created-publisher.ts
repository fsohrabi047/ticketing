import { Publisher, Subjects, TicketCreatedEvent } from '@far_ticketing/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}