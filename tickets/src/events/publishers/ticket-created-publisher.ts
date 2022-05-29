import { Publisher, Subjects, TicketCreatedEvent } from "@rktickets555/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
