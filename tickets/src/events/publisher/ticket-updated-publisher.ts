import { Publisher, Subjects, TicketUpdatedEvent } from '@far_ticketing/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
