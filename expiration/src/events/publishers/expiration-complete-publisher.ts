import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@far_ticketing/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
